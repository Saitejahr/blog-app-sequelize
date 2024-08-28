import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './styles/BlogPostForm.css';
import DataFlex from './DataFlex';
import DataBlog from './DataBlog';

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState( null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

 
  useEffect(() => {
    localStorage.removeItem('selectedTemplate')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }
    formData.append('template', selectedTemplate);
    
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post('http://localhost:5001/api/posts', formData, config);

      setTitle('');
      setContent('');
      setImage(null);
      
      setSelectedTemplate(null);
      setError('');
      toast.success('Post Created successfully!');

      navigate('/bloglist');
    } catch (error) {
      if(title === '' || content === '' || image === '' ||selectedTemplate === '') {
        setError("All Fields are required")
      }else{
        setError(error.response?.data.message || 'Error creating post');
      }
      
    }
  };

  const handleTemplateSelect = (template) => {
    if (selectedTemplate === template) {
      // If the same template is already selected, unselect it
      setSelectedTemplate(null);
    } else {
      setSelectedTemplate(template);
      localStorage.setItem('selectedTemplate', template);
    }
  };

  
  const renderTemplatePreview = () => {
    switch (selectedTemplate) {
      case 'Template1':
        return <DataFlex />;
      case 'Template2':
        return <DataBlog />;
      default:
        return null;
    }
  };

  return (
    <div className='template-container'>
      <div className="form-container" style={{ maxWidth: selectedTemplate ? '49%' : '100%' }}>
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </label>
          <label>
            Image:
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </label>

          <label className='radio'>
            <input
              type='radio'
              checked={selectedTemplate === 'Template1'}
              onChange={() => handleTemplateSelect('Template1')}
            /> Template1
          </label>
          <label className='radio'>
            <input
              type='radio'
              checked={selectedTemplate === 'Template2'}
              onChange={() => handleTemplateSelect('Template2')}
            /> Template2
          </label>

          <button type="submit">Create Post</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>

     
      {selectedTemplate && (
        <div className="template-preview">
          {renderTemplatePreview()}
        </div>
      )}
    </div>
  );
};

export default BlogPostForm;

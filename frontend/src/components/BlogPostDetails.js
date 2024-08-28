import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Template1 from './Template1';
import Template2 from './Template2';

const BlogPostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
    };

    fetchPost(); 

    
  }, [postId]); 

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {post.template === 'Template1' && <Template1 title={post.title} content={post.content} image={post.image} />}
      {post.template === 'Template2' && <Template2 title={post.title} content={post.content} image={post.image} />}
    </div>
  );
};

export default BlogPostDetail;

import React, { useState } from 'react';
import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedTemplate) {
      // Submit the form data to the selected template
      console.log("Selected Template:", selectedTemplate);
      console.log("Form Data:", formData);
    } else {
      console.log("Please select a template.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        <textarea name="message" value={formData.message} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={() => handleTemplateSelect('TemplateOne')}>Template One</button>
        <button onClick={() => handleTemplateSelect('TemplateTwo')}>Template Two</button>
      </div>
      {selectedTemplate === 'TemplateOne' && <TemplateOne formData={formData} />}
      {selectedTemplate === 'TemplateTwo' && <TemplateTwo formData={formData} />}
    </div>
  );
};

export default FormComponent;

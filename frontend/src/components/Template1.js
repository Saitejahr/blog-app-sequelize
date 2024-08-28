
import React from 'react';

import './styles/BlogFlexData.css';

const Template1 = ({ title, content, image }) => {


  let imageUrl = '';

 
  if (typeof image === 'string' && image.match(/\.(jpeg|jpg|gif|png)$/)) {
    imageUrl = `http://localhost:5001/${image.replace(/\\/g, '/')}`;
  } else if (image instanceof File) {
    
    imageUrl = URL.createObjectURL(image);
  }

  return (
    <div className="data-containers">
      <div className="data-first">
        {imageUrl && (
          <div className="flex-img">
            <img className="data-img" src={imageUrl} alt="Uploaded" />
          </div>
        )}

        <div className="flex-head">
          <h1 className="data-head">{title}</h1>
          <p className="data-paragraph">{content}</p>
        </div>
      </div>
      <div className="data-second">
        <div>
          <h1 className="data-heading">{title}</h1>
          <p className="data-para">{content}</p>
        </div>
        {imageUrl && (
          <div>
            <img className="data-images" src={imageUrl} alt="Uploaded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Template1;

import React from 'react'
import blog from './assests/blog.jpg'
import laptop from './assests/laptop.jpg'
import './styles/DataFlex.css'

const DataFlex = () => {
  return (
    <div className="data-containers">
      <div className="data-first">
        <div className="flex-img">
          <img className="data-img1" src={blog} alt={blog} />
        </div>
        <div className="flex-head">
          <h1 className="data-heading">Welcome to MERN Stack</h1>
          <p className="data-paragraph">
            The MERN stack, comprising MongoDB, Express.js, React, and Node.js,
            is a cohesive set of technologies used for building efficient and
            scalable web applications.
          </p>
        </div>
      </div>
      <div className="data-second">
      <div>
          <h1 className="data-heading">MERN Stack Blog </h1>
          <p className="data-para">
            The MERN stack, comprising MongoDB, Express.js, React, and Node.js,
            is a cohesive set of technologies used for building efficient and
            scalable web applications.
          </p>
        </div>
        <div>
          <img className="data-images" src={laptop} alt={laptop} />
        </div>
        
      </div>
    </div>
  )
}

export default DataFlex

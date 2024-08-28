import React from 'react'
import blog from './assests/blog.jpg'
import laptop from './assests/laptop.jpg'
import './styles/DataBlog.css'

const DataBlog = () => {
  return (
    <div className='container'>
      <img className='image' src={blog} alt={blog} />
      <h1 className='heading'>Welcome to MERN Stack</h1>
      <p className='para'>The MERN stack, comprising MongoDB, Express.js, React, and Node.js, is a cohesive set of technologies used for building efficient and scalable web applications. </p>
      <img className='image' src={laptop} alt={laptop} />
      <h1 className='heading'>MERN Stack Blog </h1>
      <p className='para'>The MERN stack, comprising MongoDB, Express.js, React, and Node.js, is a cohesive set of technologies used for building efficient and scalable web applications. </p>
    </div>
  )
}

export default DataBlog

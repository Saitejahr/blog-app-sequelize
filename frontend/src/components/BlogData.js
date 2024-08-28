import React from 'react'
import blog from './assests/blog.jpg'
import laptop from './assests/laptop.jpg'
import './styles/BlogData.css'

const BlogData = () => {
  return (
    <div className='data-container'>
      <img className='data-image' src={blog} alt={blog} />
      <h1 className='data-heading'>Welcome to MERN Stack</h1>
      <p className='data-para'>The MERN stack, comprising MongoDB, Express.js, React, and Node.js, is a cohesive set of technologies used for building efficient and scalable web applications. the MERN stack is a smart choice because it uses JavaScript across all layers, simplifying the learning curve. This uniformity, coupled with a strong community and ample learning resources, makes it an accessible and practical toolkit for anyone looking to dive into full-stack development.The MERN stack is also heavily utilized in the industry, favored by startups and large enterprises alike for its efficiency and the robust, modern web applications it can produce. This industry adoption not only validates its effectiveness but also opens up numerous career opportunities for those skilled in these technologies.</p>
      <img className='data-image' src={laptop} alt={laptop} />
      <h1 className='data-heading'>MERN Stack Blog </h1>
      <p className='data-para'>The MERN stack, comprising MongoDB, Express.js, React, and Node.js, is a cohesive set of technologies used for building efficient and scalable web applications. the MERN stack is a smart choice because it uses JavaScript across all layers, simplifying the learning curve. This uniformity, coupled with a strong community and ample learning resources, makes it an accessible and practical toolkit for anyone looking to dive into full-stack development.The MERN stack is also heavily utilized in the industry, favored by startups and large enterprises alike for its efficiency and the robust, modern web applications it can produce. This industry adoption not only validates its effectiveness but also opens up numerous career opportunities for those skilled in these technologies.</p>
    </div>
  )
}

export default BlogData

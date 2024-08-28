import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import BlogPostList from './components/BlogPostList'
import BlogPostForm from './components/BlogPostForm'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ViewPost from './components/ViewPost'
import BlogData from './components/BlogData'
import BlogFlexData from './components/BlogFlexData'
import Template2 from './components/Template2'
import BlogPostDetail from './components/BlogPostDetails'
import Template1 from './components/Template1'
import ReactBlog from './components/ReactBlog'
import NodeBlog from './components/NodeBlog'


const App = () => {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={ <ViewPost />} />
          <Route path="/admin/register" element={<RegisterForm />} />
          <Route path="/admin/login" element={<LoginForm />} />
          <Route path="/admin/create" element={<BlogPostForm />} />
          <Route path="/bloglist" element={<BlogPostList />}  />
          <Route path="/blogdata" element={<BlogData />} />
          <Route path="/blogflexdata" element={<BlogFlexData />} />
          <Route path="/template1" element={<Template1 />}/>
          <Route path="/template2" element={<Template2 />}/>
          <Route path="/admin/posts/:postId" element={<BlogPostDetail />} />
          <Route path="/reactblog" element={<ReactBlog />} />
          <Route path="/nodeblog" element={<NodeBlog />} />
        </Routes>
        
        <ToastContainer autoClose={500} />
        
      </div>
    </Router>
  )
}

export default App

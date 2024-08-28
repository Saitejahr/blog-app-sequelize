const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const auth = require('../utils/auth')

const Post = require('../models/Post')

// Route to fetch all blog posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error.message)
    res.status(500).json({ message: 'Internal server error' })
  }
})
// Post routes
router.get('/', postController.getAllPosts)
router.post(
  '/',
  auth.verifyToken,
  auth.checkAdminAuth,
  postController.createPost
) // This already includes auth
router.get('/:id', postController.getPostById)
router.put('/:id', postController.updatePostById)
router.delete('/:id', postController.deletePostById)

// Add the route to handle image upload and post creation
router.post(
  '/posts',
  auth.verifyToken,
  auth.checkAdminAuth,
  postController.uploadImage,
  postController.createPost
)

module.exports = router

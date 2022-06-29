import express from 'express'
import { createPost, deletePostId, getPosts, updatePost } from '../controllers/posts.js'



const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.delete('/:id', deletePostId)
router.get('/update/:id', updatePost)

export default router
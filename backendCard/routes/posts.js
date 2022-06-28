import express from 'express'
import { createPost, deletePostId, getPosts } from '../controllers/posts.js'



const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.delete('/:id', deletePostId)

export default router
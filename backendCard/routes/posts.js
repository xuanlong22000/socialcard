import express from 'express'
import { commentPost, createPost, deletePostId, getCommentCard, getPosts, getPostsDetails, updatePost } from '../controllers/posts.js'



const router = express.Router()

router.get('/', getPosts)
router.get('/details/:id', getPostsDetails)
router.get('/comment/:id', getCommentCard)
router.post('/', createPost)
router.post('/comment/add', commentPost)
router.delete('/:id', deletePostId)
router.put('/update/:id', updatePost)

export default router
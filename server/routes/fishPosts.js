import express from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/fishPosts.js'; //from controllers file
const router = express.Router();

router.get('/', getPosts)      // see controllers file
router.post('/', createPost) 
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
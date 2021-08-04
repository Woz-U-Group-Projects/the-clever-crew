import express from 'express';
import { getFishPosts, createPost, updatePost, deletePost } from '../controllers/fishPosts.js'; //from controllers file
const router = express.Router();

router.get('/', getFishPosts)      // see controllers file
router.post('/', createPost) 
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
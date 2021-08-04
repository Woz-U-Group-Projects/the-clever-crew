import express from 'express';
import { getFishPosts, createPost } from '../controllers/fishPosts.js'; //from controllers file
const router = express.Router();

router.get('/', getFishPosts)      // see controllers file
router.post('/', createPost) 

export default router;
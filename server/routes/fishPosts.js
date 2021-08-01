import express from 'express';
import { getFishes, createPost } from '../controllers/fishPosts.js'; //from controllers file
const router = express.Router();

router.get('/', getFishes)      // see controllers file
router.post('/', createPost) 

export default router;
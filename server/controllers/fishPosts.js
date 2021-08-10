import Mongoose from 'mongoose';
import PostInfo from '../models/postInfo.js'; // from model schema created 



export const getPosts =  async (req, res) => {
    try {
        const postInfo =  await PostInfo.find();
        res.status(200).json(postInfo); //request has succeeded
    } catch (error) {
        res.status(404).json({ message: error.message }); //cannot find
    }
}

export const createPost = async (req, res) => {
const post = req.body;

const newPost = new PostInfo(post);

    try {
       await newPost.save();
       res.status(201).json(newPost);  //Successfully created
    } catch (error) {
        res.status(409).json({ message: error.message }); //cannot not complete request
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body; //sent from the front end

    if(!Mongoose.Types.ObjectId.isValid(_id)) //check if id is not valid ... need to import mongoose..
    return res.status(404).send('No post with that id');

    const updatedPost = await PostInfo.findByIdAndUpdate(_id, { ...post, _id }, {new: true}); //each post has to have it's own id spread...post then id..

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if(!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that ID');

     await PostInfo.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}

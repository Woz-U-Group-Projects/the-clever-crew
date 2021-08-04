import PostInfo from '../models/postInfo.js'; // from model schema created 



export const getFishPosts =  async (req, res) => {
    try {
        const postMessages =  await PostInfo.find();
        res.status(200).json(postMessages); //request has succeeded
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

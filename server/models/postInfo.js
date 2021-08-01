import mongoose from 'mongoose';

//what each post needs to have
const postSchema = mongoose.Schema({
name: String,
location: String,
bait: String,
beer: String,
selectedFile: String,  //for the image
createdAt: {
    type: Date,
    default: new Date()
 }
});

const PostInfo = mongoose.model('PostInfo', postSchema);

export default PostInfo;
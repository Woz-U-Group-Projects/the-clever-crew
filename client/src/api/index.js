import axios from 'axios';

const url = 'http://localhost:5000/fishPosts' //the url pointing to the backend route.

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);


import * as api from '../api';

//actions 

export const getPosts = () =>  async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();  //get data from back-end
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        // make request to update the post.
        const { data } = await api.updatePost(id, post); //gets the updated post

        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
         await api.deletePost(id);    //dont need the data like the update, just delete
         dispatch({ type: 'DELETE', payload: id });

    } catch (error) {
        console.log(error);
    }
}
import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, LinearProgress } from '@material-ui/core';
import Post from './post/post';




const Posts = ({setCurrentId }) => {
    const posts = useSelector((state) => state.posts); // see reducers index.js
    
   
    

    console.log(posts);
    
    return (
        
        !posts.length ? <LinearProgress color="primary" />
       
        : (   
            <Grid  container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                       <Post post={post} setCurrentId={setCurrentId} /> 
                    </Grid>
                ))}
            </Grid>
            
        )
        
    );
}

export default Posts;
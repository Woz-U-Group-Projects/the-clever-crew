import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({name: '', location: '', size: '', bait: '', beer: '', selectedFile: ''})
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null); 
    const classes = useStyles();
    const dispatch = useDispatch(); //allows to dispatch actions

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])         //dependency array. when something changes
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) { //if id is not null
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData)); 
        }
            clearFields();  // clear form fields after hitting submit button.
            
    }
    const clearFields = () => {
        setCurrentId(null);
        setPostData({name: '', location: '', size: '', bait: '', beer: '', selectedFile: ''}); //set data as an empty 'string'
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}> 
                <Typography variant="h5">{currentId ? 'Edit Fish' : 'Add a Fish'}</Typography>                                                                        
                    <TextField name="name" variant="outlined" label="Name of Fish ?" fullWidth value={postData.name} onChange={(e) => setPostData({...postData, name: e.target.value})}></TextField> 
                    <TextField name="location" variant="outlined" label="Location ?" fullWidth value={postData.location} onChange={(e) => setPostData({...postData, location: e.target.value})}></TextField> 
                    <TextField name="size" variant="outlined" label="Size ? " fullWidth value={postData.size} onChange={(e) => setPostData({...postData, size: e.target.value})}></TextField> 
                    <TextField name="bait" variant="outlined" label="Bait Used ?" fullWidth value={postData.bait} onChange={(e) => setPostData({...postData, bait: e.target.value})}></TextField>
                    <TextField name="beer" variant="outlined" label="What beer were you drinking ? " fullWidth value={postData.beer} onChange={(e) => setPostData({...postData, beer: e.target.value})}></TextField> 
                        <div className={classes.fileUpload}>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
                        </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="warning" size="small" onClick={clearFields} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
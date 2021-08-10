import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts'

import useStyles from './styles';



const Post = ({ post, setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    
    
    return (
        
        <Card className={classes.card}>
        <CardMedia className={classes.image} image={post.selectedFile} title={post.name}/>
        <div className={classes.overlay}>
            
            <Typography variant="h6"> Name: {post.name}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        
        <CardContent>
        <Typography className={classes.title} variant="h6"  gutterBottom>Location: {post.location} </Typography>
        <Typography className={classes.title} variant="h6"  gutterBottom>Size: {post.size} </Typography>
        <Typography className={classes.title} variant="h6"  gutterBottom>Bait Used: {post.bait} </Typography>
        </CardContent>

        <Typography className={classes.title} variant="body2" color="textSecondary" component="p">Beer you were drinking: {post.beer}</Typography>
        <CardActions className={classes.cardActions}>
            
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small" />
            Delete
            </Button>
            <Button size="small" onClick={() => setCurrentId(post._id)}>
                <MoreHorizIcon fontSize="default"/>
            </Button>

        </CardActions>
    </Card>

            
        
    );
}

export default Post;
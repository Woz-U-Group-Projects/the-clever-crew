import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts'



const Post = ({ post, setCurrentId}) => {
    const dispatch = useDispatch();
    
    return (
        <Card>
            <div>
            <CardMedia  image={post.selectedFile} />
            </div>
            <div>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div>
                <Button style={{color:'lightblue'}} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>

            <div>
            
            </div>
            <CardContent>
            <Typography  variant="h5" gutterBottom>{post.location}</Typography>
            </CardContent>
            <Typography  variant="body2" color="textSecondary" component="p">{post.bait}</Typography>
            <CardActions>
                    
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                <DeleteIcon fontSize="small" />
                Delete
                </Button>

            </CardActions>
        </Card>
    );
}

export default Post;
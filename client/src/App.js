import React, { useEffect, useState } from 'react'; 
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/posts/posts';
import Form from './components/form/form';
import useStyles from './styles';


const App = () => {
    const [currentId, setCurrentId] = useState(null); //the app component is the parent component for form and posts
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container>
            
           <AppBar className={classes.appBar} position="relative">
                <Typography className={classes.title} variant="h2" align="center">Fish Collector</Typography>
            <div align="center">
                <img  src={'fishCollector.svg'} height="150px"/>
            </div>
            </AppBar>
            
            <Grow in>
                <Container>
           
                    <Grid container direction="column-reverse" justify="space-between" alignItems="stretch" spacing={3}>
                       <Grid item xs={12} sm={9}>
                           <Posts setCurrentId={setCurrentId} /> 
                        </Grid> 
                        <Grid item xs={12} sm={8} md={6}>
               
                           <Form currentId={currentId} setCurrentId={setCurrentId} />
                           </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
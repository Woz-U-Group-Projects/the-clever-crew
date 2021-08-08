import React, { useEffect, useState } from 'react'; 
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/posts/posts';
import Form from './components/form/form';


const App = () => {
    const [currentId, setCurrentId] = useState(null); //the app component is the parent component for form and posts
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container>
            <AppBar >
                <Typography variant="h2" align="center">Fish Collector</Typography>
                {/* <h1>_Robot_App</h1>
                <div className="img">
                <img className={classes.image} src={robot} alt="robot" height="90"/>
                </div> */}
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
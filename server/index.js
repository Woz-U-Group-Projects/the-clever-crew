import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/fishPosts.js';

const app = express();
app.use('/fishPosts', postRoutes);

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

const CONNECT_MONGODB_URL = 'mongodb+srv://user1:Trustno1@cluster0.frzgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' //add username and password to database
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECT_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log('DB connection worked')) )
.catch((error) => console.log(error.message) );

mongoose.set('useFindAndModify', false);
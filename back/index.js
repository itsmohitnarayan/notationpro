import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";

import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { UserController, NoteController } from "./controllers/index.js";

dotenv.config();

const MONGO_DB = process.env.MONGO_DB;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

mongoose.set("strictQuery", false);

mongoose
    .connect(MONGO_DB)
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.error('DB connection error:', err));

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

let access_token = '';

app.listen(1234, (err) => {
    if (err) {
        return console.error('Server error:', err);
    }
    console.log('Server running on port 1234');
});

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.post('/auth/login', handleValidationErrors, UserController.login);
app.post('/auth/register', handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

// Notes routes
app.get('/notes', checkAuth, NoteController.getNotes);
app.get('/notes/:id', checkAuth, NoteController.getOne);
app.post('/notes', checkAuth, handleValidationErrors, NoteController.create);
app.delete('/notes/:id', checkAuth, NoteController.remove);
app.patch('/notes/:id', checkAuth, handleValidationErrors, NoteController.update);
app.get('/fav_notes', checkAuth, NoteController.getfavoriteNotes);

// GitHub OAuth routes
app.get('/github', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`);
});

app.get('/oauth-callback', (req, res) => {
    const requestToken = req.query.code;

    axios.post(`https://github.com/login/oauth/access_token`, null, {
        params: {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: requestToken
        },
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {
        access_token = response.data.access_token;
        res.redirect('https://back-for-notium.vercel.app/success');
    }).catch((error) => {
        console.error('Error during GitHub OAuth token request:', error);
        res.status(500).send('Error during GitHub OAuth token request');
    });
});

app.get('/success', (req, res) => {
    axios.get('https://api.github.com/user', {
        headers: {
            Authorization: `token ${access_token}`
        }
    }).then((response) => {
        const requestBody = {
            email: response.data.email
        };

        axios.post('https://back-for-notium.vercel.app/gitlogin', requestBody)
            .then((response) => {
                res.json(response.data);
            }).catch((error) => {
                console.error('Error during /gitlogin request:', error);
                res.status(500).send('Error during /gitlogin request');
            });
    }).catch((error) => {
        console.error('Error during GitHub user request:', error);
        res.status(500).send('Error during GitHub user request');
    });
});

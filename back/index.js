import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { UserController, NoteController } from "./controllers/index.js";

dotenv.config();

const MONGO_DB = process.env.MONGO_DB;

mongoose.set("strictQuery", false);

mongoose
    .connect(MONGO_DB)
    .then(() => {
        console.log('DB connected successfully');

        const app = express();
        app.use(express.json());
        app.use(cors({
            origin: 'http://localhost:3000',
            credentials: true
        }));

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

    })
    .catch((err) => console.error('DB connection error:', err));

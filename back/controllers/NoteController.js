import NoteModel from "../models/Note.js"

export const getNotes = async(req, res) => {
    const user_id = req.userId
    try {
        const notes = await NoteModel.find({
            user: user_id
        });

        res.json(notes);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to get notes',
        });
    }
}

export const getOne = async(req, res) => {
    try {
        const noteId = req.params.id;
        const user_id = req.userId
        NoteModel.findOne({
            user: user_id,
            _id: noteId
        }).then(note => {
            res.json(note)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to get note',
        });
    }
}

export const remove = async(req, res) => {
    try {
        const noteId = req.params.id;

        await NoteModel.findOneAndDelete({
            _id: noteId,
        }).then(note => {
            res.json({ success: true })
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to delete note',
        });
    }
}

export const create = async(req, res) => {
    const none_arr = ["none"]
    try {
        const doc = new NoteModel({
            note_data: req.body.note_data,
            priority: none_arr,
            favorite: false,
            user: req.userId,
        });

        const note = await doc.save();

        res.json(note);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to create note',
        });
    }
};

export const update = async(req, res) => {
    try {
        const noteId = req.params.id;
        const user_id = req.userId;
        await NoteModel.updateOne({
            _id: noteId,
        }, {
            note_data: req.body.note_data,
            priority: req.body.priority,
            user: req.userId,
            favorite: req.body.favorite,
        });
        NoteModel.findOne({
            user: user_id,
            _id: noteId
        }).then(note => {
            res.json(note)
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update note',
        })
    }
};

export const getfavoriteNotes = async(req, res) => {
    const user_id = req.userId
    try {
        const notes = await NoteModel.find({
            user: user_id,
            favorite: true
        });

        res.json(notes);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Failed to get favorite notes',
        });
    }
}

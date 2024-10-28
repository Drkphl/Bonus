import db from '../config/db.js';

const explorerSchema = new db.Schema({
    name: {
        type: String,
        required: true,
    },
    fieldOfStudy: {
        type: String,
        required: true,
    },
    expedititionsParticipated: {
        type: Number,
        required: true,
    },
});

const explorer = db.model('Explorer', explorerSchema);

export default explorer;

import mongoose from 'mongoose';


const schema = mongoose.Schema({
    postedBy: {
        username: String
    },
    tuitText: String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes: Number
    }
}, { collection: 'tuits' });
export default schema;
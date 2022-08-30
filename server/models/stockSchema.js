import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    ticker: String
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
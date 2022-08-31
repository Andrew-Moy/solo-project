import mongoose from 'mongoose';

const stockSchema = mongoose.Schema({
    ticker: {type:String, required: true},
    name: {type:String, required: true},
    current: {type:Number, required: true},
    hod: {type:Number, required: true},
    LOD: {type:Number, required: true}

});

const PostMessage = mongoose.model('PostMessage', stockSchema);

export default PostMessage;
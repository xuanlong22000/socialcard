import mongoose from "mongoose";

const postSchema = mongoose.Schema({

    avatar: String,
    name: String,
    desc: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }

})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
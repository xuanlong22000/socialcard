import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const postSchema = mongoose.Schema({

    avatar: String,
    name: String,
    desc: String,
    image: String,
    like: { type: Number, default: 0 },
    createdAt: {
        type: Date,
        default: new Date()
    }

})

postSchema.plugin(mongooseDelete, { deletedAt: true })

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
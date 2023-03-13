import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    avatar: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User

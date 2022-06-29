import mongoose from "mongoose"
import PostMessage from "../models/postMessages.js"

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {

    const post = req.body

    const newPost = new PostMessage(post)
    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}

export const deletePostId = async (req, res) => {
    const id = req.params.id
    try {
        await PostMessage.deleteOne({ _id: id })
        res.status(200).json({ message: "xoa roi nghe" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const postId = req.params.id
    PostMessage.find({ _id: postId }).then(post => console.log(post))



    // PostMessage.findByIdAndUpdate(postId,{})

    // const newPost = new PostMessage(post)
    // try {
    //     await newPost.save()

    //     res.status(201).json(newPost)
    // } catch (error) {
    //     res.status(200).json({ message: error.message })
    // }
}
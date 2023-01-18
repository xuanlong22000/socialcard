import CommentCard from "../models/commentCard.js"
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

// export const deletePostId = async (req, res) => {
//     const id = req.params.id
//     try {
//         await PostMessage.deleteOne({ _id: id })
//         res.status(200).json({ message: "xoa roi nghe" })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

export const deleteSoftPost = async (req, res) => {
    const id = req.params.id
    try {
        await PostMessage.delete({ _id: id })
        res.status(200).json({ message: "xoa roi nghe" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// export const restorePost = async (req, res) => {
//     try {
//         const postMessages = await PostMessage.restore({})
//         res.status(200).json(postMessages)
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }

export const updatePost = async (req, res) => {

    const post = req.body

    try {
        const postMessages = await PostMessage.findByIdAndUpdate(req.params.id, { $set: post })

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }

}

export const updateDeleteField = async (req, res) => {

    const fullPost = await PostMessage.findById(req.params.id)

    try {
        const postMessages = await PostMessage.findByIdAndUpdate(req.params.id,
            {

                deleted: fullPost.deleted === true ? false : true

            },
            { new: true }
        )

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }

}

export const likePost = async (req, res) => {

    const data = await PostMessage.findById(req.params.id);

    try {
        const postMessages = await PostMessage.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    like: data.like + 1
                }
            },
            { new: true }
        )

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }

}

export const getPostsDetails = async (req, res) => {
    try {
        const postMessages = await PostMessage.findById(req.params.id)

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}

export const commentPost = async (req, res) => {

    const comment = req.body

    const newComment = new CommentCard(comment)
    try {
        await newComment.save()

        res.status(201).json(newComment)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}

export const getCommentCard = async (req, res) => {
    try {
        const commentCard = await CommentCard.find({ cardId: req.params.id })

        res.status(200).json(commentCard)
    } catch (error) {
        res.status(200).json({ message: error.message })
    }
}
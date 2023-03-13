import CommentCard from "../models/commentCard.js"
import PostMessage from "../models/postMessages.js"
import User from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    const user = req.body
    const takenUsername = await User.findOne({ username: user.username })

    if (takenUsername) {
        res.json({ message: "Username or email has been taken", isSuccess: false })
    } else {
        user.password = await bcrypt.hash(req.body.password, 10)
        const dbUser = new User({
            avatar: user.avatar,
            username: user.username,
            password: user.password
        })
        dbUser.save()
        res.json({ message: "Success", isSuccess: true })
    }
}

export const loginUser = async (req, res) => {
    const userLogging = req.body
    User.findOne({ username: userLogging.username }).then(data => {
        if (!data) {
            return res.json({ message: "Invalid Username or Password" })
        }
        bcrypt.compare(userLogging.password, data.password).then(isCorrect => {
            if (isCorrect) {
                const payload = {
                    id: data._id,
                    avatar: data.avatar,
                    username: data.username
                }
                jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 86400 }, (err, token) => {
                    if (err) return res.json({ message: 'loi r' })
                    return res.json({ message: "Success", token: `Bearer ${token}` })
                })
            } else {
                return res.json({ message: 'Invalid Username or Password' })
            }
        })
    })
}

export const verifyJWT = async (req, res, next) => {
    const token = req.headers["x-access-token"]?.split(' ')[1]


    if (token) {
        jwt.verify(token, process.env.PASSPORT_SECRET, (err, decoded) => {
            if (err) return res.json({ isLoggedIn: false, message: "Failed To Authenticate" })
            req.user = {};
            req.user.id = decoded.id
            req.user.avatar = decoded.avatar
            req.user.username = decoded.username

            next()
        })
    } else {
        res.json({ message: 'Incorrect Token Given', isLoggedIn: false })
    }
}

export const isUserAuth = async (req, res) => {
    res.json({ isLoggedIn: true, username: req.user.username, avatar: req.user.avatar })
}

export const getProfile = async (req, res) => {
    const username = req.params.id;

    User.findOne({ username: username })
        .then(dbUser => res.json({
            avatar: dbUser.avatar,
            username: dbUser.username,
        }))
        .catch(err => res.json({
            username: "User Not Found",
        }))
}

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
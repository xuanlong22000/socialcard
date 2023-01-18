import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
    {
        comment: { type: String },
        cardId: { type: mongoose.Schema.Types.ObjectId, ref: "Card" },
    },
    {
        timestamps: true,
    }
);

const CommentCard = mongoose.model("CommentCard", CommentSchema)

export default CommentCard
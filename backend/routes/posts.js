import express from "express";
import {
  commentPost,
  createPost,
  deleteSoftPost,
  getCommentCard,
  getPosts,
  getPostsDetails,
  getProfile,
  isUserAuth,
  likePost,
  loginUser,
  registerUser,
  updateDeleteField,
  updatePost,
  verifyJWT,
} from "../controllers/posts.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/isUserAuth", verifyJWT, isUserAuth);
router.get("/profile/:id", verifyJWT, getProfile);
router.get("/", getPosts);
router.get("/details/:id", getPostsDetails);
router.get("/comment/:id", getCommentCard);
router.put("/like/:id", likePost);
router.put("/revert/:id", updateDeleteField);
router.post("/", createPost);
router.post("/comment/add", commentPost);
router.delete("/:id", deleteSoftPost);
router.put("/update/:id", updatePost);

export default router;

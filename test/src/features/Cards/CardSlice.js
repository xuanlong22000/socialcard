import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SocialCardsApi from "../../api/socialCardApi";


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const res = await SocialCardsApi.showdata()
        return res
    }
)

export const addPosts = createAsyncThunk(
    'posts/addPosts',
    async (data) => {
        const res = await SocialCardsApi.saveAll(data)
        return res
    }
)

export const deletePosts = createAsyncThunk(
    'posts/deletePosts',
    async (id) => {
        await SocialCardsApi.delete(id)
        return id;
    }
)

const initialState = {
    posts: []
}



const CardSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // postAdded: {
        //     reducer(state, action) {
        //         SocialCardsApi.saveAll(action.payload)
        //     },
        //     prepare(avatar, name, desc, image) {
        //         return {
        //             payload: {
        //                 avatar,
        //                 name,
        //                 desc,
        //                 image
        //             }
        //         }
        //     }
        // },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })

            .addCase(addPosts.fulfilled, (state, action) => {
                state.posts.push(action.payload)
                // state.posts = action.payload
            })

            .addCase(deletePosts.fulfilled, (state, action) => {
                state.posts = state.posts.filter((item, index) => item._id !== action.payload)
            })

    }


})

export default CardSlice.reducer
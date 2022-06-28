import { createSlice } from "@reduxjs/toolkit";
import { sub } from 'date-fns';
import SocialCardsApi from "../../api/socialCardApi";


const initialState = [
    // {
    //     id: '1',
    //     avatar: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    //     name: 'Learning React',
    //     desc: "Learn React",
    //     image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    //     date: sub(new Date(), { minutes: 10 }).toISOString(),

    // },
    // {
    //     id: '2',
    //     avatar: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    //     name: 'React 1',
    //     desc: "The more I say slice, the more I want pizza.",
    //     image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    //     date: sub(new Date(), { minutes: 5 }).toISOString(),

    // },
    // {
    //     id: '3',
    //     avatar: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    //     name: 'React 2',
    //     desc: "The more I say slice, the more I want pizza.",
    //     image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
    //     date: sub(new Date(), { minutes: 5 }).toISOString(),

    // }
]



const CardSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                SocialCardsApi.saveAll(action.payload)
            },
            prepare(name, desc, avatar, image) {
                return {
                    payload: {
                        avatar,
                        name,
                        desc,
                        image
                    }
                }
            }
        },
        deletePost: {
            reducer(state, action) {

                SocialCardsApi.delete(action.payload)
            }
        },

        updatePost: {
            reducer(state, action) {
                SocialCardsApi.update(action.payload)
            }
        }
    }

})

export const selectAllPosts = (state) => state.posts;


export const { postAdded, deletePost, updatePost } = CardSlice.actions
export default CardSlice.reducer
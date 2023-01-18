import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    revert: []
}

const revertSlice = createSlice({
    name: 'revert',
    initialState,
    reducers: {
        revertAdd(state, action) {
            state.revert.unshift(action.payload)
        },
        revertDelete(state, action) {
            state.revert.shift()
        }
    },
})

export const { revertAdd, revertDelete } = revertSlice.actions
export default revertSlice.reducer
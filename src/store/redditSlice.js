import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  posts: {},
  comments: [],
}

const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const {id, content} = action.payload
      state.posts[id] = {id, content}
    },
    addComment: (state, action) => {
      state.comments.push(action.payload)
    },
  },
})
export const {addPost, addComment} = redditSlice.actions
export default redditSlice.reducer

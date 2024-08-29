import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  posts: {},
}
const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      const {id, content} = action.payload
      state.posts[id] = {id, content}
    },
  },
})

export const {addPost} = postsSlice.actions;
export default postsSlice.reducer

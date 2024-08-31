import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  subReddits: [],
}

const subRedditSlice = createSlice({
  name: 'subReddit',
  initialState: initialState,
  reducers: {
    addSubReddit: (state, action) => {
      state.subReddits.push(action.payload)
    },
  },
})

export const {addSubReddit} = subRedditSlice.actions
export default subRedditSlice.reducer
import {configureStore} from '@reduxjs/toolkit'
//add redditReducer
import redditReducer from './redditSlice'
//add subRedditReducer
import subRedditReducer from './subredditSlice'

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subReddit: subRedditReducer,
  },
})

export default store

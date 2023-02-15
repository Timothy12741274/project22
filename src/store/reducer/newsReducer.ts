import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    news: []
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload.news
        }
    }
})

export default newsSlice.reducer
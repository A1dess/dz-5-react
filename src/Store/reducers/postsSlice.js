import { createSlice } from "@reduxjs/toolkit";
import fetchPosts from "../actions/postsCreator";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state,action) => {
      state.loading = true;
      state.error = "";
      console.log(action);
    });
      builder.addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.posts = [];
      console.log(action);

      });
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.error = "";
        state.loading = false;
        console.log(action);
        state.posts = action.payload;
      });
  },
});

const postsReducer = postsSlice.reducer;

export default postsReducer;
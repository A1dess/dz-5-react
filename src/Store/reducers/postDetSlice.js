import { createSlice } from "@reduxjs/toolkit";
import fetchPost from "../actions/postDetailsCreator";

const initialState = {
  loading2: false,
  post: [],
  error2: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state) => {
      state.loading2 = true;
      state.error2 = "";
    });
      builder.addCase(fetchPost.rejected, (state, action) => {
        state.error2 = action.payload;
        state.loading2 = false;
        state.post = [];
      });
      builder.addCase(fetchPost.fulfilled, (state, action) => {
        console.log(action);
        state.error2 = "";
        state.loading2 = false;
        state.post = action.payload;
      });
  },
});

const postReducer = postSlice.reducer;

export default postReducer;
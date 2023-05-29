import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Api/index";

const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (payload, thunkApi) => {
    try {
      const response = await api.getDetPosts(payload);
      console.log(response);
      return  response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export default fetchPost;
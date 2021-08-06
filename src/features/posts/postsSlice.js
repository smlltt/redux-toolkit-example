import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./api";

const initialState = {
  list: 0,
  status: "idle",
};

export const getPosts = createAsyncThunk(
  "posts/fetchPosts",
  async ({ limit }) => {
    const response = await fetchPosts({ limit });
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.list = payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default postsSlice.reducer;

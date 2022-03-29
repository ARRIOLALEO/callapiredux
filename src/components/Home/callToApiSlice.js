import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const callToApi = createAsyncThunk("recipies/api", async (obj, { state, error }) => {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await req.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
});
const recipiesSlice = createSlice({
  name: "recipies",
  initialState: [],
  reducers: {
    removeHalf: (state) => {
      console.log("im here");
      return state.slice(0, 15);
    },
  },
  extraReducers: {
    //this are my middleware
    [callToApi.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default recipiesSlice;

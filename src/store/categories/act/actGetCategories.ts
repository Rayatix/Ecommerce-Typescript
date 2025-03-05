import { CreateAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = { id: number; title: string; prefix: string; img: string }[];

const actGetCategories = CreateAsyncThunk(
  "categories/actGetCategories",

  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5173/category"
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An Unexpected error");
      }
    }
  }
);

export default actGetCategories;

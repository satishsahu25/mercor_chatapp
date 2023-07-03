import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import msgService from "./messageservice";

export const getallmessages = createAsyncThunk(
  "messages/getallmessages",
  async (data,thunkAPI) => {
    try {
      return await msgService.getallmessages(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const sendmessages = createAsyncThunk(
  "messages/sendmessages",
  async (msgdata, thunkAPI) => {
    try {
      return await msgService.sendmessages(msgdata);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  messsagesarray: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const messageSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getallmessages.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getallmessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.messsagesarray = action.payload;
        
    })
    .addCase(getallmessages.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
    })
    .addCase(sendmessages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendmessages.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.isError = false;
          state.sentmessage = action.payload;
      })
      .addCase(sendmessages.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.isError = true;
          state.message = action.error;
      })
    ;
  },
});

export default messageSlice.reducer;

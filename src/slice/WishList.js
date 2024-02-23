import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
WishListData: [],
  selectedField: {},
  isLoading: false,
  error: null,
};



const BASE_URL = "http://localhost:8000/Wishlist";

export const getWishFromServer = createAsyncThunk(
  "Wishlist/getWishFromServer",

  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "issues not found" });
    }
  }
);


const issueSlice = createSlice({

    name:'issueSlice',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
          // GET
          .addCase(getWishFromServer.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getWishFromServer.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.issuesList = action.payload;
          })
          .addCase(getWishFromServer.rejected, (state, action) => {
            state.error = action.payload.error;
            state.isLoading = false;
            state.issuesList = [];
          });
    },
})

export default issueSlice.reducer;
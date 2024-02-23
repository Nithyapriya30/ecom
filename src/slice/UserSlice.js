import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
  selecteduser: {},
  isLoading: false,
  error: "",
};
const BASE_URL = "http://localhost:8000/student";
//GET
export const getuserfromserver = createAsyncThunk(
  "student/getuserfromserver",
  async (_, { rejectWithValue }) => {
    const response = await fetch(BASE_URL);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "User not found" });
    }
  }
);
// POST
export const adduserfromserver = createAsyncThunk(
  "student/adduserfromserver",
  async (user, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json ; charset =UTF-8",
      },
    };
    const response = await fetch(BASE_URL, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "Cant add leavetype" });
    }
  }
);
// PUT
export const updateuserinserver = createAsyncThunk(
  "student/updateuserinserver",
  async (user, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json ; charset =UTF-8",
      },
    };
    const response = await fetch(BASE_URL + "/" + user.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "leavetype not updated" });
    }
  }
);
// DELETE
export const deleteuserfromserver = createAsyncThunk(
  "student/deleteuserfromserver",
  async (user, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(BASE_URL + "/" + user.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectWithValue({ error: "leavetype not deleted" });
    }
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    removeUserFromList: (state, action) => {
      state.userData = state.userData.filter(
        (user) => user.id !== action.payload.id
      );
    },
    setSelecteduser: (state, action) => {
      state.selecteduser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getuserfromserver.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getuserfromserver.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userData = action.payload;
      })
      .addCase(getuserfromserver.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.userData = [];
      })
      // ADD
      .addCase(adduserfromserver.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(adduserfromserver.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userData.push(action.payload);
      })
      .addCase(adduserfromserver.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      // UPDATE
      .addCase(updateuserinserver.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateuserinserver.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.userData = state.userData.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(updateuserinserver.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })
      // DELETE
      .addCase(deleteuserfromserver.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteuserfromserver.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
      })
      .addCase(deleteuserfromserver.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });
  },
});

export const { addusertolist, removeUserFromList, updateuserInList, setSelecteduser } =
  usersSlice.actions;

export default usersSlice.reducer;

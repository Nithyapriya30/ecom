import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productSet: [],
  selectedProduct: {},
  error: "",
};

export const getProductFromJson = createAsyncThunk(
  "product/getproductFromJson",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:8000/product");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      return rejectWithValue({ error: "No matches found" });
    }
  }
);

export const addProductToJson = createAsyncThunk(
  "product/addProductToJson",
  async (user, { rejectWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json; charset=UTF-8" },
    };
    const response = await fetch("http://localhost:8000/product", options);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return rejectWithValue({ error: "Something went wrong in add users" });
    }
  }
);

export const updateProductToJson = createAsyncThunk(
  "product/updateProductToJson",
  async (updatedProduct, { rejectWithValue }) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedProduct),
      headers: { "content-type": "application/json; charset=UTF-8" },
    };
    const response = await fetch(
      `http://localhost:8000/product/${updatedProduct.id}`, // Corrected URL
      options
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return rejectWithValue({ error: "Error updating product" });
    }
  }
);

export const removeProductFromJson = createAsyncThunk(
  "product/removeProductFromJson",
  async (updatedUser, { rejectWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(
      `http://localhost:8000/product/${updatedUser.id}`,
      options
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return rejectWithValue({ error: "Error deleting product" });
    }
  }
);

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductFromJson.pending, (state) => {})
      .addCase(getProductFromJson.fulfilled, (state, action) => {
        state.productSet = action.payload;
        state.error = "";
      })
      .addCase(getProductFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
        state.productSet = [];
      })
      .addCase(addProductToJson.pending, (state) => {})
      .addCase(addProductToJson.fulfilled, (state, action) => {
        state.productSet.push(action.payload);
        state.error = "";
      })
      .addCase(addProductToJson.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(updateProductToJson.pending, (state) => {})
      .addCase(updateProductToJson.fulfilled, (state, action) => {
        state.productSet = state.productSet.map((product) =>
          product.id === action.payload.id ? action.payload : product
        );
        state.error = "";
      })
      .addCase(updateProductToJson.rejected, (state, action) => {
        state.error = action.payload.error;
      })
      .addCase(removeProductFromJson.pending, (state) => {})
      .addCase(removeProductFromJson.fulfilled, (state, action) => {
        state.productSet = state.productSet.filter(
          (product) => product.id !== action.payload.id
        );
        state.error = "";
      })
      .addCase(removeProductFromJson.rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const { setSelectedProduct } = ProductSlice.actions;

export default ProductSlice.reducer;

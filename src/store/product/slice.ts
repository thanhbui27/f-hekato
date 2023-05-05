import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "src/services/api/product";
import { paramProduct, product } from "src/services/api/product/types";
import { IResponePagination } from "src/types/response";

interface TProduct {
  status: string;
  productSeller: product[];
  productFeature: product[];
  productArrive: product[];
  productOffer: product[];
  productTrending: product[];
  productTrendSmall: product[];
  productGetAll: IResponePagination;
  productById : product
}

export const getProductAll = createAsyncThunk(
  "product/PRODUCTGETALL",
  async (data: paramProduct) => {
    try {
      const res = await productApi.apiProductGellAll(data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getProductFeature = createAsyncThunk(
  "product/ProductFeature",
  async () => {
    try {
      const res = await productApi.apiProductFeature();
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getProductBestSeller = createAsyncThunk(
  "product/ProductBestSeller",
  async () => {
    try {
      const res = await productApi.apiProductBestSeller();
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getProductArrival = createAsyncThunk(
  "product/ProductArrival",
  async () => {
    try {
      const res = await productApi.apiProductNewArrivel();
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getProductOffer = createAsyncThunk(
  "product/ProductOffer",
  async () => {
    try {
      const res = await productApi.apiProductSpecialOffer();
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getProductTrending = createAsyncThunk(
  "product/ProductTrending",
  async () => {
    try {
      const res = await productApi.apiProductTrending();
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getProductTrendSmall = createAsyncThunk(
  "product/ProductTrendsmall",
  async () => {
    try {
      const res = await productApi.apiProductTrendSmall();
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getProductById = createAsyncThunk("product/GETPRODUCTBYID", async (id : number) => {
  try{
    const res = await productApi.apiProductById(id)
    return res
  }catch(error){
    return Promise.reject(error)
  }
})

const initialState: TProduct = {
  status: "request",
  productArrive: [],
  productFeature: [],
  productOffer: [],
  productSeller: [],
  productTrending: [],
  productTrendSmall: [],
  productById : {} as product,
  productGetAll: {
    items: [],
    pageCount: 0,
    pageIndex: 0,
    totalRecords: 0,
    pageSize: 0,
  },
};

const productReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductAll.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductAll.fulfilled, (state, action) => {
      state.status = "success";
      state.productGetAll = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getProductAll.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductById.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.productById = action.payload.data.data;
      state.status = "success";

    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductFeature.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductFeature.fulfilled, (state, action) => {
      state.status = "success";
      state.productFeature = action.payload.data.data;
      console.log(action.payload.data.data);
    });
    builder.addCase(getProductFeature.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductBestSeller.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductBestSeller.fulfilled, (state, action) => {
      state.status = "success";
      state.productSeller = action.payload.data.data;
    });
    builder.addCase(getProductBestSeller.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductArrival.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductArrival.fulfilled, (state, action) => {
      state.status = "success";
      state.productArrive = action.payload.data.data;
    });
    builder.addCase(getProductArrival.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductOffer.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductOffer.fulfilled, (state, action) => {
      state.status = "success";
      state.productOffer = action.payload.data.data;
    });
    builder.addCase(getProductOffer.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductTrendSmall.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductTrendSmall.fulfilled, (state, action) => {
      state.status = "success";
      state.productTrendSmall = action.payload.data.data;
    });
    builder.addCase(getProductTrendSmall.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductTrending.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductTrending.fulfilled, (state, action) => {
      state.status = "success";
      state.productTrending = action.payload.data.data;
    });
    builder.addCase(getProductTrending.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productReducer.reducer;

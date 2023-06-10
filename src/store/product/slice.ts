import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "src/services/api/product";
import {
  List_imageV2,
  ProductV2,
  paramProduct,
  product,
} from "src/services/api/product/types";
import { IResponePagination } from "src/types/response";

interface TProduct {
  status: string;
  productSeller: product[];
  productFeature: product[];
  productArrive: product[];
  productOffer: product[];
  productTrending: product[];
  productTrendSmall: product[];
  productGetAll: IResponePagination<product[]>
  productById: product;
  list_image: List_imageV2[];
  searchProduct : ProductV2[]
}

export const productCreate = createAsyncThunk(
  "product/PRODUCT_CREATE",
  async (data: FormData) => {
    try {
      const res = await productApi.createProduct(data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const productSearch = createAsyncThunk(
  "product/PRODUCT_SEARCH",
  async (data: string) => {
    try {
      const res = await productApi.searchProduct(data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const uploadImageProduct = createAsyncThunk(
  "product/UPLOAD_IMAGE_PRODUCT",
  async (data: FormData) => {
    try {
      const res = await productApi.UploadImageProduct(data);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const getAllProductImage = createAsyncThunk(
  "product/GET_ALL_PRODUCT_IMAGE",
  async (id: number) => {
    try {
      const res = await productApi.getImageProductById(id);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const productUpdate = createAsyncThunk(
  "product/PRODUCT_UPDATE",
  async (data: FormData) => {
    try {
      const res = await productApi.updateProduct(data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const productFilter = createAsyncThunk(
  "product/PRODUCT_FILTER",
  async (data: string) => {
    try {
      const res = await productApi.filterProduct(data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

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

export const getProductById = createAsyncThunk(
  "product/GETPRODUCTBYID",
  async (id: number) => {
    try {
      const res = await productApi.apiProductById(id);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/DELETE_PRODUCT",
  async (id: number) => {
    try {
      const res = await productApi.deleteProduct(id);
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const initialState: TProduct = {
  status: "request",
  productArrive: [],
  productFeature: [],
  productOffer: [],
  productSeller: [],
  productTrending: [],
  productTrendSmall: [],
  searchProduct : [],
  productById: {} as product,
  productGetAll: {
    items: [],
    pageCount: 0,
    pageIndex: 0,
    totalRecords: 0,
    pageSize: 0,
  },
  list_image: [],
};

const productReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productCreate.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(productCreate.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(productCreate.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(productFilter.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(productFilter.fulfilled, (state, action) => {
      state.status = "success";
      state.productGetAll.items = action.payload.items
    });
    builder.addCase(productFilter.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(productSearch.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(productSearch.fulfilled, (state, action) => {
      state.status = "success";
      state.searchProduct = action.payload.data
    });
    builder.addCase(productSearch.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(productUpdate.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(productUpdate.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(productUpdate.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(uploadImageProduct.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(uploadImageProduct.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(uploadImageProduct.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getAllProductImage.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getAllProductImage.fulfilled, (state, action) => {
      state.status = "success";
      state.list_image = action.payload.data.data;
    });
    builder.addCase(getAllProductImage.rejected, (state, action) => {
      state.status = "rejected";
    });

    builder.addCase(getProductAll.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getProductAll.fulfilled, (state, action) => {
      state.status = "success";
      state.productGetAll = action.payload;
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

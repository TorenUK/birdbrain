import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/basketSlice";
import orderReducer from "../features/order/orderSlice";
import productReducer from "../features/product/productSlice";
import filterReducer from "../features/filter/filterSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
    order: orderReducer,
    product: productReducer,
    filter: filterReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basket/basketSlice";
import orderReducer from "../features/order/orderSlice";
import productReducer from "../features/product/productSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
    order: orderReducer,
    product: productReducer,
  },
});

import {configureStore,combineReducers} from "@reduxjs/toolkit";
import products from "./products/productsSlice";
import auth from "./auth/authSlice";
import orders from "./payments/paymentSlice";



const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),
      reducer: combineReducers({
          orders,
          products,
          auth
      })
});


export default store;
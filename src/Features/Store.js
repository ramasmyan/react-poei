import {configureStore,combineReducers} from "@reduxjs/toolkit";
import products from "./products/productsSlice";
import auth from "./auth/authSlice";



const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),
      reducer: combineReducers({
          products,
          auth
      })
});


export default store;
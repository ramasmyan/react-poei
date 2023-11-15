import {configureStore,combineReducers} from "@reduxjs/toolkit";
import counter from "./count/coutSlice";
import products from "./products/productsSlice";
import auth from "./auth/authSlice";



const store = configureStore({
      reducer: combineReducers({
          counter,
          products,
          auth
      })
});


export default store;
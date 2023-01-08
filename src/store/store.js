import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
export default configureStore({
    reducer:{
        dataProduct:ProductReducer,
    }
})
import {configureStore} from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";
import ApiMiddleware from './Middleware/ApiMiddleware'
import thunk from "redux-thunk";

export default configureStore({
    reducer:{
        dataProduct:ProductReducer,
    },
    middleware:[
        ApiMiddleware,
        thunk
    ]
})
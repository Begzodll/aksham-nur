import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import ApiMiddleware from './Middleware/ApiMiddleware'
import ProductReducer from "./reducers/ProductReducer";

export default configureStore({
    reducer:{
        dataProduct:ProductReducer,
    },
    middleware:[
        ApiMiddleware,
        thunk
    ]
})
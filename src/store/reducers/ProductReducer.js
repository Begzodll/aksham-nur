import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../Action";

const ProductReducer = createSlice({
    name: 'product',
    initialState: {
        info:[]
    },
    reducers: {
        getProduct:(state,action) => {
            state.info = action.payload.data
        }
    }
})
export const getProductFunc = () => apiCall({
    url:'/product/all',
    method:'GET',
    onSuccess:ProductReducer.actions.getProduct.type
})

export default ProductReducer.reducer
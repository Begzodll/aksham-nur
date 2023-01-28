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

export default ProductReducer.reducer;

// https://api.telegram.org/bot5914837575:AAEBVDwIgzd5K1ekwX--vnZ6wiT9svn9PyA/sendMessage?chat_id=-1001611008926&text=Hello
// Example : https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data}
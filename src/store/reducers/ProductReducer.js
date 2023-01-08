import {createSlice} from "@reduxjs/toolkit";


const ProductReducer = createSlice({
    name: 'product',
    initialState: {
        data:{
            menu:[
                {
                    id:1,
                    name:'bnasa',
                    img:'src',
                    desc:"bla bla",
                    mainDesc:"main"
                }
            ]
        }
    },
    reducers: []
})
export default ProductReducer.reducer
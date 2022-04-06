import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    products:[],
    status: '',
    error: ''
}
const BASE_URL = 'http://127.0.0.1:8000/api'
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async(_,{rejectWithValue}) => {
        try {   
            const res = await axios.get(`${BASE_URL}/products`)
            return res?.data.data
            
        } catch (error) {
            return rejectWithValue('Не удалось загрузить данные')
        }
    }

)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchProducts.pending]: (state) => {
            state.status = 'loading';
          },
          [fetchProducts.fulfilled]: (state, action) => {
            state.status = 'success';
            state.products = action.payload;
          },
          [fetchProducts.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
          }
    }
})

export default productSlice.reducer

// export const {fetchProducts} = productSlice.actions
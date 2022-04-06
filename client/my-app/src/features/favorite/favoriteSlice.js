import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

const initialState = {
    products: localStorage.getItem('favorite') ? JSON.parse( localStorage.getItem('favorite')) : [],

}


export const favoriteSlice = createSlice({
    name:'favorite',
    initialState,
    reducers:{
        addToFavorite (state, action) {
            const existingProduct = state.products.findIndex(item => item.id === action.payload.id)
            if(existingProduct >= 0){
                state.products[existingProduct].cartQuantity += 1
                toast.info(` ${state.products[existingProduct].title} уже в избранном `, {
                    position: 'bottom-left',
                  });
            } else{
                const newProduct = {...action.payload, cartQuantity : 1}
                state.products.push(newProduct)
                toast.info(` ${action.payload.title} добавленно в избранное `, {
                    position: 'bottom-left',
                  });
            }
            localStorage.setItem('favorite', JSON.stringify(state.products));
        },
        deleteFromFavorite(state, action) {
            state.products = state.products.filter(item => item.id !== action.payload.id)
            toast.error(` ${action.payload.title} удалено из избранного`, {
                position: 'bottom-left',
              });
              localStorage.setItem('favorite',JSON.stringify(state.products))
        }

    }
})

export default favoriteSlice.reducer
export const {addToFavorite, deleteFromFavorite} = favoriteSlice.actions
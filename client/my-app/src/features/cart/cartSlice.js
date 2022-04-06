import {createSlice} from '@reduxjs/toolkit'
import {toast} from 'react-toastify'

const initialState = {
    products: localStorage.getItem('cartItems') ? JSON.parse( localStorage.getItem('cartItems')) : [],
    totalQuantity: 0,
    totalAmount:0
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart (state, action) {
            const existingProduct = state.products.findIndex(item => item.id === action.payload.id)
            if(existingProduct >= 0){
                state.products[existingProduct].cartQuantity += action.payload.quantity ? action.payload.quantity : 1
                toast.info(` ${state.products[existingProduct].title} добавленно в корзину `, {
                    position: 'bottom-left',
                  });
            } else{
                const newProduct = {...action.payload, cartQuantity : action.payload.quantity ? action.payload.quantity : 1}
                state.products.push(newProduct)
                toast.info(` ${action.payload.title} добавленно в корзину `, {
                    position: 'bottom-left',
                  });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.products));
        },
        decreaseCartItem(state, action) {
            const currentProduct = state.products.findIndex(item => item.id === action.payload.id)
            if(state.products[currentProduct].cartQuantity > 1){
                state.products[currentProduct].cartQuantity -=1;
                toast.info(`${state.products[currentProduct].title} кол-во уменьшено  `, {
                    position: 'bottom-left',
                  });
            } else if (state.products[currentProduct].cartQuantity === 1 ){
                state.products = state.products.filter(item => item.id !== action.payload.id)
                toast.error(` ${action.payload.title} удален из корзины`, {
                    position: 'bottom-left',
                  });
            }
            localStorage.setItem('cartItems',JSON.stringify(state.products))
        },
        deleteFromCart(state, action) {
            state.products = state.products.filter(item => item.id !== action.payload.id)
            toast.error(` ${action.payload.title} удален из корзины`, {
                position: 'bottom-left',
              });
              localStorage.setItem('cartItems',JSON.stringify(state.products))
        },
        getTotal (state, action){
            let {total, quantity} = state.products.reduce((cartTotal, cartItem)=>{
                const {price, cartQuantity} = cartItem
                const itemTotal = price * cartQuantity
        
                cartTotal.total += itemTotal 
                cartTotal.quantity += cartQuantity
                return cartTotal
              }, {
        
                
                total:0,
                quantity:0
              })
              state.totalQuantity = quantity
              state.totalAmount = total
        }

    }
})

export default cartSlice.reducer
export const {addToCart, decreaseCartItem, deleteFromCart, getTotal} = cartSlice.actions
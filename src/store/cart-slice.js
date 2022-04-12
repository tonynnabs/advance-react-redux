import { createSlice } from "@reduxjs/toolkit";

const cartState = {
    items: [],
    totalQty: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartState,
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(items => items.id === newItem.id);
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalAmount: newItem.price
                });
                state.totalQty++;
            }else{
                existingItem.quantity++;
                existingItem.totalAmount = existingItem.totalAmount + existingItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if(item.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
                state.totalQty--;
            }else{
                item.quantity--;
                item.totalAmount = item.totalAmount - item.price;
            }
        }
    
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
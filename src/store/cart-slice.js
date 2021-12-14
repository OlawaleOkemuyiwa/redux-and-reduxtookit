import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0,
    cartChanged: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(latestState, action) {
            latestState.items = action.payload.items;
            latestState.totalQuantity = action.payload.totalQuantity;
        },

        addItemToCart(latestState, action) {
            const newItem = action.payload;  //newItem is an obj of item with id, title, and price.
            const exisitingItem = latestState.items.find(item => item.id === newItem.id);

            latestState.totalQuantity++;
            latestState.cartChanged = true;

            if (!exisitingItem) {                       //the newItem isn't already existing in cart
                latestState.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price           //totalPrice = newItem.price * quantity but quantity is always 1 (infact we dont have any quantity info on the item from product) therefore, totalPrice of cart = price of the newly added item
                });
            } else {                                    //the item already exists in cart
                exisitingItem.quantity++;
                exisitingItem.totalPrice += newItem.price
            }
        },
        
        removeItemFromCart(latestState, action) {
            const itemID = action.payload;
            const itemIndex = latestState.items.findIndex(item => item.id === itemID);
            const item = latestState.items[itemIndex];

            latestState.totalQuantity--;
            latestState.cartChanged = true;

            if (item.quantity === 1) {
                latestState.items.splice(itemIndex, 1)
                //OR latest.items = latest.items.filter(item => item.id !== itemID)
            } else {
                item.quantity--; 
                item.totalPrice -= item.price
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
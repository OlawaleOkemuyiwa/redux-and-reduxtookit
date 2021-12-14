import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
    showCart: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(latestState) {
            latestState.showCart = !latestState.showCart;
        },
        setNofication(latestState, action) {
            latestState.notification = {
                title: action.payload.title,
                status: action.payload.status,
                message: action.payload.message
            }
        }
    }
})
 
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

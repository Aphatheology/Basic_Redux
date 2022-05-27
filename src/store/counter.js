import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0, 
    showCounter: true}
const counterSlice = createSlice({
    name: 'counter',
    initialState, 
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
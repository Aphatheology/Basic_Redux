import { createSlice, configureStore } from '@reduxjs/toolkit'

import CounterReducer from './counter'
import AuthReducer from './auth'



// const counterReducer = (state = {counter: 0, showCounter: true}, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }


// const store = createStore(counterReducer);


const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: {
        counter: CounterReducer,
        auth: AuthReducer
    }
})



export default store;
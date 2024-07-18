// import { Type } from "./action.type";
// export const initalState = {
//     basket:[]
// }
// export const reducer =(state,action)=>{
//     switch (action.type) {
//       case Type.ADD_TO_BASKET:
//         return {
//           ...state,
//           basket:[...state.basket,action.item]
//         };
        

//       default:
//         return state;
//     }
// }
// src/utility/reducer.js
import { Type } from "./action.type";  // Ensure the path is correct

export const initialState = {
    basket: []
};

export const reducer = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        
        default:
            return state;
    }
};

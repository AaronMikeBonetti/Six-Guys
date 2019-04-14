import { ADD_ITEM_TO_ORDER, ADD_ITEM_TO_CHECKOUT } from "../actions/action-types"
import { intialState } from "../App"


export const rootReducer = (state = intialState, action) => {
    
      switch(action.type){
        case ADD_ITEM_TO_ORDER: 
          return Object.assign({},state,{order:[
            {name: action.payload.name,
            price: action.payload.price}
          ]})

        case ADD_ITEM_TO_CHECKOUT: 
        return Object.assign({},state,{
          header:{itemsInCheckout: action.payload[2]},
          checkout:[...state.checkout,{
          itemInfo: action.payload[0],
          cookingInstructions: action.payload[1],
          addOns: action.payload.splice(3),
          }]
        })
    
        default: return{
         ...state
        }
      
      }
    }



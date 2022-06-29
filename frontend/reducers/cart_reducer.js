import { 
  SHOW_ITEMS, 
  SHOW_ITEM, 
  RECEIVE_ITEM, 
  UPDATE_ITEM, 
  DELETE_ITEM 
} from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SHOW_ITEM:
      return action.item
    case SHOW_ITEMS:
      return action.items
    case RECEIVE_ITEM:
      return Object.assign({}, state, {[action.item.id]: action.item})
    // case UPDATE_ITEM:
    //   let updatedState = Object.assign({}, state)
    //   return updatedState;
    case DELETE_ITEM:
      let nextState = Object.assign({}, state)
      delete nextState[action.item.id]
      return nextState;
    default:
      return state;
  }
}

export default cartReducer;
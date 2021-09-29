const initialState = {
    currentItem:{},
    detailsTab:false,
  cart: {
    count: 0,
    items:[],
  },
};

const updateState = (state) => {
  return Object.assign({}, state);
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_CNT":
      state.cart.count = state.cart.count + 1;
      return updateState(state);
    case "DEC_CNT":
      state.cart.count = state.cart.count - 1;
      return updateState(state);
    case "ADD_ITM":
        state.cart.items.push(action.value)
        return updateState(state);
    case "DLT_ITM":
            let index = state.cart.items.indexOf(action.value)
            if(index)state.cart.items.splice(index,1)
            return updateState(state);
    case "OPN_DET":
            state.currentItem = action.value;
            state.detailsTab = true;  
            return updateState(state);
    case "CLS_DET":
                state.detailsTab = false;
                return updateState(state);
    default:
      return state;
  }
};

export default dataReducer;

const ADD_TO_CART = 'ADD_TO_CART';

const checkProduct = (state, payload) => {
  const productInState = state.find(elem => elem.id === payload.id);

  if (productInState) {
    productInState.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return checkProduct(state, action.payload);

    default:
      return state;
  }
};

export const addToCartAction = payload => ({
  type: ADD_TO_CART,
  payload,
});

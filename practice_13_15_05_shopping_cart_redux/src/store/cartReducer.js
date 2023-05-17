const ADD_TO_CART = 'ADD_TO_CART';
const INCR_COUNT_CART_PRODUCT = 'INCR_COUNT_CART_PRODUCT';
const DECR_COUNT_CART_PRODUCT = 'DECR_COUNT_CART_PRODUCT';
const REMOVE_ALL_CART_PRODUCTS = 'REMOVE_ALL_CART_PRODUCTS';

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
    case INCR_COUNT_CART_PRODUCT:
      return state.map(elem => {
        if (elem.id === action.payload) {
          elem.count++;
        }
        return elem;
      });

    case DECR_COUNT_CART_PRODUCT:
      return state
        .map(elem => {
          if (elem.id === action.payload) {
            return {
              ...elem,
              count: elem.count - 1,
            };
          }
          return elem;
        })
        .filter(elem => elem.count !== 0);
    case REMOVE_ALL_CART_PRODUCTS:
      return (state = []);

    default:
      return state;
  }
};

export const addToCartAction = payload => ({
  type: ADD_TO_CART,
  payload,
});
export const incrCountCartProductAction = payload => ({
  type: INCR_COUNT_CART_PRODUCT,
  payload,
});
export const decrByPayloadAction = payload => ({
  type: DECR_COUNT_CART_PRODUCT,
  payload,
});
export const removeAllCartProductsAction = () => ({
  type: REMOVE_ALL_CART_PRODUCTS,
});

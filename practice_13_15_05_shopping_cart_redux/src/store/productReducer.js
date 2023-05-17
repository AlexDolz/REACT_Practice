const ADD_PRODUCT = 'ADD_PRODUCT';
const SORT_PRODUCTS = 'SORT_PRODUCTS';

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state,
        {
          id: Date.now(),
          ...action.payload,
        },
      ];
    case SORT_PRODUCTS:
      if (typeof state[0][action.payload] === 'string') {
        state.sort((a, b) =>
          a[action.payload].localeCompare(b[action.payload])
        );
      } else {
        state.sort((a, b) => a[action.payload] - b[action.payload]);
      }
      return [...state];

    default:
      return state;
  }
};

export const addProductAction = payload => ({
  type: ADD_PRODUCT,
  payload,
});
export const sortProductsAction = payload => ({
  type: SORT_PRODUCTS,
  payload,
});

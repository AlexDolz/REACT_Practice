const ADD_PRODUCT = 'ADD_PRODUCT';

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

    default:
      return state;
  }
};

export const addProductAction = payload => ({
  type: ADD_PRODUCT,
  payload,
});

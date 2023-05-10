// 4. Создать action add_product, который будет принимать в качестве payload сформированный объект
// 5. В productReducer прописать логику для add_product
// 6. Вызвать add_product при сабмите формы, передавая вызов add_product в dispatch

const ADD_PRODUCT = 'ADD_PRODUCT';

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, { id: Date.now(), ...action.payload }];
    default:
      return state;
  }
};

export const addProductAction = payload => ({ type: ADD_PRODUCT, payload });

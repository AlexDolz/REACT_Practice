const productsReq = callback => {
  fetch('https://api.escuelajs.co/api/v1/products/')
    .then(res => res.json())
    .then(data => callback(data));
};

export const addProductsReq = newProduct => {
  fetch('https://api.escuelajs.co/api/v1/products/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newProduct),
  })
    .then(res => res.json())
    .then(data => console.log(data));
};

export default productsReq;

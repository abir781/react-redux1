import React from 'react';

const Justfordemo = () => {

    

    const products = [
  { id: 1, price: 100, quantity: 2 },
  { id: 2, price: 250, quantity: 1 },
  { id: 3, price: 75, quantity: 4 }
];

const allmoney = products.reduce((summation,product )=>summation+product.price,0);
    return (
        <div>

            <p>{allmoney}</p>
            
        </div>
    );
};

export default Justfordemo;
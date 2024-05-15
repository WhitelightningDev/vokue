import React from 'react';
import tshirtImage from './tshirt.png'; // Import your image file
import jeansImage from './jeans.png';
import dressIMage from './woman-clothes.png'
import jacketImage from './denim-jacket.png'

function Products() {
  // Example product data
  const products = [
    { name: 'T-Shirt', price: '$20', quantity: 10, image: tshirtImage },
    { name: 'Jeans', price: '$40', quantity: 5, image: jeansImage },
    { name: 'Dress', price: '$50', quantity: 8, image: dressIMage },
    { name: 'Jacket', price: '$60', quantity: 3, image: jacketImage }
  ];

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Quantity: {product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

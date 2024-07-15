import React from 'react';

export default function ProductDetail({ product, handleBack }) {
  return (
    <div className="product-detail">
      <button onClick={handleBack} class="btn btn-outline-primary">Назад</button >
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};


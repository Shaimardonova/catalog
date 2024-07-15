import React from 'react';

export default function Filter ({ setPriceRange, setSelectedCategory }) {
  const handlePriceChange = (event) => {
    const [min, max] = event.target.value.split('-').map(Number);
    setPriceRange([min, max]);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="filter">
      <label>
        Цена:
        <select onChange={handlePriceChange}>
          <option value="0-1000">Все</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500-1000">$500 - $1000</option>
        </select>
      </label>
      <label>
        Category:
        <select onChange={handleCategoryChange}>
          <option value="">Все</option>
          <option value="men's clothing">Мужская одежда</option>
          <option value="jewelery">Ювелирное изделие</option>
          <option value="electronics">Оргтехника</option>
          <option value="women's clothing">Женская одежда</option>
        </select>
      </label>
    </div>
  );
};

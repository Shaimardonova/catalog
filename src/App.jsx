import { useState } from 'react'
import './App.css'
import SearchInput from './components/SearchInput'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import Filter from './components/Filter'

export default function App() {
  const [searchTerm, setsearchTerm] = useState('');
  const [selectedProduct, setselectedProduct] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (event) => {
    setsearchTerm(event.target.value)
  };

  const handleProductSelect = (product) => {
    setselectedProduct(product);
  }

  const handleBack = () => {
    setselectedProduct(null);
  };

  return (
    <div>
      {selectedProduct ? ( 
        <ProductDetail product={selectedProduct} handleBack={handleBack}/> 
       ) : (
        <>
          <SearchInput searchTerm={searchTerm} handleSearch={handleSearch}/>
          <Filter 
            priceRange={priceRange} 
            setPriceRange={setPriceRange} 
            selectedBrand={selectedBrand} 
            setSelectedBrand={setSelectedBrand}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Product 
            searchTerm={searchTerm} 
            priceRange={priceRange} 
            selectedBrand={selectedBrand} 
            selectedCategory={selectedCategory} 
            handleProductSelect={handleProductSelect} 
          />
        </>
      )}
    </div>
  );
}

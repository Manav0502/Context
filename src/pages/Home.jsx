import React from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  return (
    <div className="home-layout">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="cart-sidebar">
        <Cart />
      </div>
    </div>
  );
};

export default Home;
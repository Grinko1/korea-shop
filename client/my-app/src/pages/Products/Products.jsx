import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import {addToFavorite} from '../../features/favorite/favoriteSlice'
import ProductItem from './ProductItem';

const Products = ({ products }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToFavorite = (product) => {
    dispatch(addToFavorite(product))
  };
  return (
    <div className="products_container">
      {products !== null &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} handleAddToCart={handleAddToCart} handleAddToFavorite={handleAddToFavorite}/>
        ))}
    </div>
  );
};

export default Products;

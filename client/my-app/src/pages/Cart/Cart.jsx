import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { IoLogoWhatsapp } from 'react-icons/io';

import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseCartItem,
  deleteFromCart,
  getTotal,
} from '../../features/cart/cartSlice';

const Cart = () => {
  const { products, totalQuantity, totalAmount } = useSelector((state) => state.cart);
  const quantity = 1;

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart({...product, quantity:quantity}));
  };
  const handleDescreaseFromCart = (product) => {
    dispatch(decreaseCartItem(product));
  };
  const handleDeleteFromCart = (product) => {
    dispatch(deleteFromCart(product));
  };
  useEffect(() => {
    dispatch(getTotal());
  }, [products]);
  return (
    <div className="cart__container">
      <h1 className="cart__head">Корзина </h1>
      <div className="cart__products-container">
        {products &&
          products.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              handleDescreaseFromCart={handleDescreaseFromCart}
              handleDeleteFromCart={handleDeleteFromCart}
              quantity={quantity}
            />
          ))}
      </div>

      <div className="cart__order">
        <h3 className="cart__head">Оформить</h3>
        <div className="cart__order-table">
          <div className="cart__table-head">
            <span>Название</span>
            <span>Описание</span>
            <span>Колличество</span>
            <span>Итого</span>
          </div>
          <div className="cart__table-body">
            {products &&
              products.map((product) => (
                <div className="cart__table-item" key={product.id}>
                  <span>{product?.typeName}</span>
                  <span>{product?.title}</span>
                  <span>{product?.cartQuantity}</span>
                  <span>{product?.cartQuantity * product?.price}</span>
                </div>
              ))}

            <div className="cart__table-total">
              <span>Вальдемар Зайцев</span>
              <span>89141234567</span>
              <span>{totalQuantity}</span>
              <span>{totalAmount}</span>
            </div>
          </div>
        </div>
        <div className="cart__order-bottom">
          <button className="cart__order-btn">
            Заказать <IoLogoWhatsapp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from 'react';
import './Cart.scss'
import product2 from '../../img/product2.jpeg'
import {IoMdAdd, IoMdRemove, IoIosTrash} from 'react-icons/io'
import { Link } from 'react-router-dom';


const CartItem = ({product, handleAddToCart, handleDescreaseFromCart, handleDeleteFromCart, quantity}) => {

    return (
        <div className="cart__products-item">
          <Link to={`/product/${product.id}`}>
        <div className="cart__products-imgBlock">
            <img src={product?.img} alt="" className="cart__products-img" />
        </div>
        </Link>
        <div className="cart__products-name">
          <b >
              {product?.typeName}
          </b>
        </div>
        <div className="cart__products-desc">
          <p>
          {product?.title}
          </p>
        </div>
        <div className="cart__products-price">
        {product?.price}p
        </div>
        <div className="cart__products-quantity">
        <IoMdRemove className="cart__products-icon" onClick={()=>handleDescreaseFromCart(product) }/>
       
       <p>{product?.cartQuantity}</p>
       <IoMdAdd className="cart__products-icon" onClick={()=>handleAddToCart(product)}/>
        </div>
        <div className="cart__products-price">
        {product?.price * product?.cartQuantity}p
        </div>
        <div className="cart__products-delete">
           <IoIosTrash className="cart__products-iconDelete" onClick={() =>handleDeleteFromCart(product)}/>
        </div>
    </div>
    );
};

export default CartItem;
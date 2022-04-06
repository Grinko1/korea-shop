import React from 'react';
import './Products.scss'
import { BsCart4} from 'react-icons/bs';
import {MdFavoriteBorder} from 'react-icons/md'
import { Link } from 'react-router-dom';

const ProductItem = ({product, handleAddToCart, handleAddToFavorite}) => {



    return (
        <div className='product_item'>
            <Link to={`/product/${product.id}`}>
         <img className='product_img' src={product.img} alt=""/>
         </Link>
         <div className='product_desc'>
             <div className="product__title">
                  <Link to={`/product/${product.id}`}>
             <b>{product.title}</b>
             </Link>
             </div>
            
                   <h3>{product.price}p</h3>
                   <div className='product_icon'>
                   <p  className='product_favorite'>
                        <MdFavoriteBorder onClick={() =>handleAddToFavorite(product)}/>
                       </p>
                       <p  className='product_cart' onClick={()=>handleAddToCart(product)}>
                        <BsCart4 />
                       </p>

                   </div>
         </div>
        </div>
    );
};

export default ProductItem;
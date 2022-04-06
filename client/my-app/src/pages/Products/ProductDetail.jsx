import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import {IoMdAdd, IoMdRemove} from 'react-icons/io'
import './ProductDetail.scss'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()


    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
        .then((res)=>{
            setProduct(res.data.data);
        })
    },[id])

    const decreaseQuantity = () => {
        setQuantity(quantity === 1 ? 1 : prev=> prev -1)
    }
    const increaseQuantity = ()=>{
        setQuantity(prev => prev +1)
    }
    const handleAddToCart = (product) => {
            console.log({...product,quantity:quantity });
            dispatch(addToCart({...product,quantity:quantity }))
    }
    return (
        <>
       {  product && 
       <div className='detail'>
           <h1 className='detail__head'>{product.title}</h1>
           <div className="detail__block">
               <div className="detail__left">
                   <img src={product.img} alt="" className='detail__img'/>
               </div>
               <div className="detail__rigth">
                   <div className="detail__category">
                       <b>{product.category.title}/{product.type.title}</b>
                   </div>
                   <div className="detail__desc">
                        <p>
                       {product.desc}
                   </p>
                   <h3 className="detail__price">{product.price}p</h3>
                   </div>
                   <div className="detail__btns">
                
       <IoMdRemove className="detail__icon" onClick={decreaseQuantity}/>
       <p>{quantity}</p>
       <IoMdAdd className="detail__icon" onClick={increaseQuantity}/>
       
       <button className='detail__btn' onClick={() => handleAddToCart(product)}>В корзину</button>
  
        <div className="detail__price">
            {product.price}p
        </div>
                   </div>
                  
               </div>
           </div>
        </div>
        }
        </>
    );
};

export default ProductDetail;
import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Nav.scss';
import { BsHeart , BsCart4} from 'react-icons/bs';
import {FaUserCircle} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { getTotal } from '../../features/cart/cartSlice';


const Layout = () => {
  const {totalQuantity, products} = useSelector(state => state.cart)
  const favoritedlength = useSelector(state => state.favorite.products.length)
 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotal())
  },[products])
  return (
    <div className="container">
      <header >
          <div className="nav_container">
          <div className='nav_left'>
        <div className="nav_logo">
          <h1 className='nav_h1'>
              <Link to='/'>Korea-Shop</Link>
              </h1>
        </div>
       
 
        </div>
        <div className="nav_right">
            <div className='nav_bar'>
                <Link to='/login' ><FaUserCircle/> Аккаунт</Link>
                <Link to='/cart' className='nav__link-cart'><BsCart4/> Корзина <span className='nav__badge-cart'>{totalQuantity}</span> </Link>
                <Link to='/favorite'  className='nav__link-favorite'><BsHeart/> Избранное <span className='nav__badge-fav'>{favoritedlength}</span></Link>

            </div>
        </div>
        </div>
      
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/nav/Layout';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Sighin from './pages/Login/Sighin'
import Cart from './pages/Cart/Cart'
import Favorite from './pages/Favorite/Favorite';
import ProductDetail from './pages/Products/ProductDetail';
import { useDispatch } from "react-redux";
import { fetchProducts } from './features/products/productSlice';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { getTotal } from './features/cart/cartSlice';
import AdminPanel from './pages/Admin/AdminPanel';
import AddCategory from './pages/Admin/AddPages/AddCategory';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
    dispatch(getTotal())
  },[])
  return (
    <div className="App">
          <ToastContainer />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Sighin/>} />
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path='/favorite' element={<Favorite/>}/>
                    <Route path='/product/:id' element={<ProductDetail/>}/>
                    <Route path='/admin' element={<AdminPanel/>} />
                    <Route path='/admin/category' element={<AddCategory/>} />
                </Route>
            </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Products from './Products/Products';

import './Home.scss';

import BanerHome from '../components/BanerHome/BanerHome';
import InfoPanel from '../components/InfoPanel/InfoPanel';
import SearchPanel from '../components/Search/SearchPanel';
import { useSelector } from 'react-redux';

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { products } = useSelector((state) => state.products);
  const [sort, setSort] = useState('popular');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProduct, setSortedProduct] = useState(filteredProducts);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((item) => item.category.id === activeCategory));
    }
  }, [activeCategory, products]);

  useEffect(() => {
    setSortedProduct(filteredProducts);
    if (sort === 'max') {
      setSortedProduct([...filteredProducts].sort((a, b) => b.price - a.price));
    } else if (sort === 'min') {
      setSortedProduct([...filteredProducts].sort((a, b) => a.price - b.price));
    }
  }, [sort, filteredProducts]);

  useEffect(() => {
    if (search.length !== 0) {
      setSortedProduct(
        sortedProduct.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())),
      );
    } else {
      setSortedProduct(filteredProducts);
    }
  }, [search]);

  return (
    <div className="baner-home">
      <InfoPanel activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <BanerHome />
      <SearchPanel sort={sort} setSort={setSort} search={search} setSearch={setSearch} />
      {products == null ? <p>Loading..</p> : <Products products={sortedProduct} />}
    </div>
  );
};

export default Home;

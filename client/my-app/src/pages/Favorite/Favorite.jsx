import './Favorite.scss';
import FavoriteItem from './FavoriteItem';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromFavorite } from '../../features/favorite/favoriteSlice';
import { addToCart } from '../../features/cart/cartSlice';

const Favorite = () => {
  const products = useSelector((state) => state.favorite.products);
  const cartItem = useSelector((state) => state.cart.products);


  // find products in cart and change btn to already in cart
//   const ids = [...cartItem, ...products].map((i) => i.id);
//   const idItems = ids.reduce((acc, item) => {
//     acc[item] = acc[item] ? acc[item] + 1 : 1;
//     return acc;
//   }, {});

//   const idProdInCart = Object.keys(idItems)
//     .filter((item) => idItems[item] > 1)
//     .map((x) => +x);
//   console.log(idProdInCart);

  const dispatch = useDispatch();
  const handleDeleteFromFavorite = (product) => {
    dispatch(deleteFromFavorite(product));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="favorite__container">
      <h1 className="favorite__head">Избранное</h1>
      <div className="favorite__list">
        {products &&
          products.map((product) => (
            <FavoriteItem
              key={product.id}
              product={product}
              handleDeleteFromFavorite={handleDeleteFromFavorite}
              handleAddToCart={handleAddToCart}
            />
          ))}

      </div>
    </div>
  );
};

export default Favorite;

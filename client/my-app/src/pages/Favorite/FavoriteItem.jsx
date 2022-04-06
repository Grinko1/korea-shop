import './Favorite.scss';
import { IoIosTrash } from 'react-icons/io';

const FavoriteItem = ({ product, handleDeleteFromFavorite, handleAddToCart }) => {
  return (
    <div className="favorite__item">
      <div className="favorite__item-imgBlock">
        <img src={product?.img} alt="" className="favorite__item-img" />
      </div>
      <div className="favorite__item-name">
        <b>{product?.typeName}</b>
      </div>
      <div className="favorite__item-desc">
        <p>{product?.title}</p>
      </div>
      <div className="favorite__item-price">{product?.price}p</div>
      <div className="favorite__item-toCart">
        <button className="favorite__item-btn" onClick={() => handleAddToCart(product)}>
          В корзину
        </button>
      </div>
      <div className="favorite__item-delete">
        <IoIosTrash
          className="favorite__item-iconDel"
          onClick={() => handleDeleteFromFavorite(product)}
        />
      </div>
    </div>
  );
};

export default FavoriteItem;

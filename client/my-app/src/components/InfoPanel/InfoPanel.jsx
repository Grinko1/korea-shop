import React from 'react';
import { BsInstagram, BsWhatsapp, BsTelegram } from 'react-icons/bs';


const InfoPanel = ({activeCategory, setActiveCategory}) => {
 

  const cat = [
    { id:0, name: 'Все', value: 'all' },
    {id:1, name: 'Макияж', value: 'makeup' },
    {id:2, name: 'Для лица', value: 'face' },
    {id:4, name: 'Для тела', value: 'body' },
    {id:3, name: 'Для волос', value: 'hair' },
    {id:5, name: 'БАДы', value: 'bad' },
  ];

  return (
    <div className="nav_category">
      <div className="category-left">
         <ul className='category__list'>
        {
          cat.map(item => (
            <li key={item.id}
            onClick={() =>setActiveCategory(item.id)}
            className={activeCategory === item.id ? 'active' : ''}
            >{item.name}</li>
          ))
        }
      </ul>  
      </div>
   

      <div className="category-rigth">
        <p>89140123456</p>
        <div className="icons">
          <a href="#" className="nav_insta">
            <BsInstagram />
          </a>
          <a href="#" className="nav_whats">
            <BsWhatsapp />
          </a>
          <a href="#" className="nav_teleg">
            <BsTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;

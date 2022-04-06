import axios from 'axios';
import { useEffect, useState } from 'react';
import './AddCategory.scss';

const AddCategory = () => {
    const [categories, setCategories] = useState(null)
    const [newCategory, setNewCategory] = useState('')
    useEffect(()=>{
        const getCategories = async() =>{
        const res = await axios.get('http://127.0.0.1:8000/api/categories')
        setCategories(res.data.data)
        }
        getCategories()
    },[])
    const handleAddCategory = () => {
        console.log(newCategory);
    }


  return (
    <div className="category">
      <h1 className="category__head">Добавить категорию</h1>
      <div className="category__container">
        <div className="category__left">
          <div className="category__input">
            <p>Введите название( Для лица, Макияж)</p>
            <input type="text" value={newCategory} onChange={e => setNewCategory(e.target.value)} />
            <button className='category__input-btn' onClick={handleAddCategory}>Добавить</button>
          </div>
        </div>
        <div className="category__rigth">
            <h3 className="category__head">Добавленные категории</h3>
            <ul  className="category__list">
                { categories !== null &&
                    categories.map(item =>(
                         <li className="category__list-item" key={item.id}>{item.title}</li>
                    ))
                }
               
            </ul>

        </div>
      </div>
    </div>
  );
};

export default AddCategory;

import React from 'react';
import './SearchPanel.scss'
import {BsSearch} from 'react-icons/bs'

const SearchPanel = ({sort, setSort, search, setSearch}) => {
    return (
        <div className='search_container'>
            <div className='search_input'>
            <BsSearch className='search_icon'/> 
            <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder='Введите название'/> 
            </div>
            <div className="search_select">
                <select onChange={e => setSort(e.target.value)}> 
                    <option defaultValue >Сортировать по</option>
                    <option value="popular">Популярности </option>
                    <option value="max">Мах цена </option>
                    <option value="min">Мин цена </option>
                    
                </select>
            </div>
        </div>
    );
};

export default SearchPanel;
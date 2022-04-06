import { Link } from 'react-router-dom';
import './AdminPanel.scss';

const AdminPanel = () => {
    return (
        <div className='admin'>
            <h1 className='admin__head'>Админ панель</h1>
            <div className="admin__container">
                <div className="admin__links">
                    <div className="admin__links-item">
                        <Link to='/admin/create'>Добавить товар</Link>
                    </div>
                    <div className="admin__links-item">
                        <Link to='/admin/create'>Редактировать/удалить товар</Link>
                    </div>
                    <div className="admin__links-item">
                        <Link to='/admin/category'>Добавить категорию</Link>
                    </div>
                    <div className="admin__links-item">
                        <Link to='/admin/create'>Добавить тип </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
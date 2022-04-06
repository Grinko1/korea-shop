import React, { useState } from 'react';
import FormInput from './FormInput/FormInput';
import { Link} from 'react-router-dom';

const Registration = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        tel: '',
        password: '',
      });

      const inputs = [
        {
          id: 1,
          name: 'name',
          type: 'text',
          errorMessage: "Имя должно быть длинной от 2-16 букв, и не должно содержать символов!",
          placeholder: 'имя',
          label: 'имя',
          pattern: "^[A-Za-z0-9]{2,16}$",
          required: true
        },
        {
          id: 2,
          name: 'email',
          type: 'email',
          errorMessage:"Email должен был формата user@mail.domen!",
          placeholder: 'Email',
          label: 'email',
          required: true
        },
        {
          id: 3,
          name: "tel",
          type: "tel",
          placeholder: "телефон",
          errorMessage:"Телефон должен быть заполнен!",
          label: "телефон",
          required: true
        },
        {
          id: 4,
          name: 'password',
          type: 'password',
          errorMessage: "Пароль должен быть от 5-20 букв или цифр!",
          placeholder: 'пароль',
          label: 'Пароль',
          pattern: `^[a-zA-Z0-9]{5,20}$`,
          required: true
        },
      ];

      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
      }
    
      console.log(values);
    return (
        <div className="signin-container">
            <div className="empty"></div>
        <form className='signin-form' onSubmit={handleSubmit}>
          <h1>Регистрация</h1>
          {inputs.map((input) => (
            <FormInput 
            key={input.id} 
           {...input}
            value= {values[input.name]}
            onChange={onChange}
            />
          ))}
  
          <button className='btn-submit' >Зарегистрироваться</button>
        </form>
        <div className='login-error'>
                <p>Есть аккаунт? <Link to='/login'>Войти </Link></p>
        </div>
      </div>
    );
};

export default Registration;
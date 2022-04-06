import React, { useEffect, useState } from 'react';
import FormInput from './FormInput/FormInput';
import { Link } from 'react-router-dom';
import './Login.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout, me } from '../../slices/userSlice';

const Login = () => {
  // const dispatch = useDispatch();
  // const { status, error, email, role , access_token} = useSelector((state) => state.user);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  // useEffect(() => {
  //   dispatch(me())
  // }, [access_token])

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      errorMessage: 'Email должен был формата user@mail.domen!',
      placeholder: 'Email',
      label: 'email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      errorMessage: 'Пароль должен быть от 5-20 букв или цифр!',
      placeholder: 'пароль',
      label: 'Пароль',
      pattern: `^[a-zA-Z0-9]{5,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const logoutFromAccount = () => {
  //     dispatch(logout())
  // }
  // console.log(values);

  // const handleLogin = () => {
  //   dispatch(login(values));
  // };
  return (
    <div className="signin-container">
      <div className="empty"></div>
      {/* { role === 'ADMIN'  ? ( */}
        {/* <>
          <h1>Вы вошли как {role} </h1>
          <h4>{email}</h4>
          <div className="logout">
            <button className="logout-btn" onClick={logoutFromAccount}>
              Выйти
            </button>
          </div>
        </> */}
      {/* ) : ( */}
        <form className="signin-form" onSubmit={handleSubmit}>
          <h1>Вход в аккаунт</h1>
          {/* {status === 'loading' ? <h3>Подождите...</h3> : ''} */}
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}

          <button className="btn-submit"  type="submit">
            Войти
          </button>
        </form>
      {/* )} */}
      <div className="login-error">
        {/* { error !== null ? <h3 style={{ color: 'red' }}>Такого пользователя не существует!</h3> : ''} */}

        <p>
          Перейти на <Link to="/">главную </Link>
        </p>
        <p>Нет аккаунта ? <Link to='/register'>Зарегистрируйтесь</Link> </p>
        {/* <p>
          Перейти на <Link to="/admin">админ панель </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import './LoginSignup.css';
import MainMenu from '../MainMenu/MainMenu';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import bpla from '../Assets/bpla.jpg';

export const LoginSignup = () => {
    const [isRegister, setIsRegister] = useState(true);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleToggle = () => {
        setIsRegister(!isRegister);
        setIsForgotPassword(false);
    };

    const handleForgotPassword = () => {
        setIsForgotPassword(true);
    };

    const handleBackToLogin = () => {
        setIsForgotPassword(false);
    };

    const handleLogin = () => {
        const username = 'admin';
        const password = 'admin';

        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
        } else {
            console.log('Невірний логін або пароль');
        }
    };

    if (isLoggedIn) {
        return <MainMenu />;
    }

    return (
        <div className='container'>
            <div className='inputs'>
                <div className='header'>
                    <div className='text'>{isForgotPassword ? 'Зміна паролю' : isRegister ? 'Реєстрація' : 'З поверненням!'}</div>
                    <div className='underline'></div>
                </div>
                {isForgotPassword ? (
                    <>
                        <div className='input-container'>
                            <label>Новий пароль</label>
                            <div className='input'>
                                <img src={password_icon} alt='' />
                                <input type='password' placeholder='Введіть новий пароль' />
                            </div>
                        </div>
                        <div className='input-container'>
                            <label>Підтвердження паролю</label>
                            <div className='input'>
                                <img src={password_icon} alt='' />
                                <input type='password' placeholder='Підтвердіть пароль' />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {isRegister && (
                            <div className='input-container'>
                                <label>Юзернейм</label>
                                <div className='input'>
                                    <img src={user_icon} alt='' />
                                    <input type='input' placeholder='Введіть юзернейм' />
                                </div>
                            </div>
                        )}
                        <div className='input-container'>
                            <label>E-mail</label>
                            <div className='input'>
                                <img src={email_icon} alt='' />
                                <input type='email' placeholder='Введіть e-mail' />
                            </div>
                        </div>
                        <div className='input-container'>
                            <label>Пароль</label>
                            <div className='input'>
                                <img src={password_icon} alt='' />
                                <input type='password' placeholder='Введіть пароль' />
                            </div>
                        </div>
                    </>
                )}
                {isForgotPassword ? (
                    <div className='submit-container'>
                        <div className='submit'>Зберегти та продовжити</div>
                        <div className='back-to-login' onClick={handleBackToLogin}>
                            Назад до входу
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='forgot-password'>
                            Забули пароль? <span onClick={handleForgotPassword}>Нажміть тут!</span>
                        </div>
                        <div className='submit-container'>
                            <div className='submit' onClick={handleLogin}>
                                {isRegister ? 'Зареєструватись' : 'Увійти'}
                            </div>
                            <div className='submit-placeholder' onClick={handleToggle}>
                                {isRegister ? 'Маєте акаунт?' : 'Бажаєте зареєструватись?'}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className='image-container'>
                <img src={bpla} alt='' className='image' />
            </div>
        </div>
    );
};

export default LoginSignup;
import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Опрацювання відправки даних форми
        console.log(formData);
        // Очистка форми після відправки
        setFormData({
            username: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='contacts-container'>
            <h1 className='contacts-header'>Контакти</h1>
            <form className='contacts-form' onSubmit={handleSubmit}>
                <label htmlFor='subject' className='contacts-label'>Тема:</label>
                <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='contacts-input'
                    value={formData.subject}
                    onChange={handleChange}
                />

                <label htmlFor='message' className='contacts-label'>Повідомлення / Скарги / Побажання:</label>
                <textarea
                    id='message'
                    name='message'
                    className='contacts-textarea'
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button type='submit' className='contacts-button'>Відправити</button>
            </form>
        </div>
    );
};

export default Contacts;

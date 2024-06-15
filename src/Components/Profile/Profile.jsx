import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [userProfile, setUserProfile] = useState({
        firstName: 'John',
        lastName: 'Doe',
        username: 'johndoe123',
        email: 'johndoe@example.com',
        birthYear: 1990,
        gender: 'Male',
        userType: 'Regular',
        phoneNumber: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        profilePicture: 'https://via.placeholder.com/250',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editProfile, setEditProfile] = useState({ ...userProfile });

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUserProfile((prevState) => ({
                ...prevState,
                profilePicture: reader.result,
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleProfilePictureRemove = () => {
        setUserProfile((prevState) => ({
            ...prevState,
            profilePicture: '',
        }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditProfile((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev);
        setEditProfile({ ...userProfile });
    };

    const handleSaveChanges = () => {
        setUserProfile({ ...editProfile });
        setIsEditing(false);
    };

    return (
        <div className='profile-container'>
            <div className='profile-left'>
                {userProfile.profilePicture ? (
                    <img src={userProfile.profilePicture} alt='Profile' className='profile-picture-large' />
                ) : (
                    <div className='profile-picture-placeholder'>No Image</div>
                )}
                <div className='profile-picture-actions'>
                    <label className='profile-picture-change'>
                        Змінити фото
                        <input type='file' onChange={handleProfilePictureChange} className='profile-picture-input' />
                    </label>
                    <button onClick={handleProfilePictureRemove} className='profile-picture-remove'>
                        Видалити фото
                    </button>
                </div>
            </div>
            <div className='profile-right'>
                {isEditing ? (
                    <>
                        <input
                            type='text'
                            name='firstName'
                            value={editProfile.firstName}
                            onChange={handleInputChange}
                            placeholder='Ім’я'
                            className='profile-input'
                        />
                        <input
                            type='text'
                            name='lastName'
                            value={editProfile.lastName}
                            onChange={handleInputChange}
                            placeholder='Прізвище'
                            className='profile-input'
                        />
                        <input
                            type='text'
                            name='username'
                            value={editProfile.username}
                            onChange={handleInputChange}
                            placeholder='Юзернейм'
                            className='profile-input'
                        />
                        <input
                            type='email'
                            name='email'
                            value={editProfile.email}
                            onChange={handleInputChange}
                            placeholder='Пошта'
                            className='profile-input'
                        />
                        <input
                            type='number'
                            name='birthYear'
                            value={editProfile.birthYear}
                            onChange={handleInputChange}
                            placeholder='Рік народження'
                            className='profile-input'
                        />
                        <input
                            type='text'
                            name='gender'
                            value={editProfile.gender}
                            onChange={handleInputChange}
                            placeholder='Стать'
                            className='profile-input'
                        />
                        <input
                            type='text'
                            name='userType'
                            value={editProfile.userType}
                            onChange={handleInputChange}
                            placeholder='Тип користувача'
                            className='profile-input'
                        />
                        <input
                            type='text'
                            name='phoneNumber'
                            value={editProfile.phoneNumber}
                            onChange={handleInputChange}
                            placeholder='Номер телефону'
                            className='profile-input'
                        />
                        <input
                            type='text'
                            name='address'
                            value={editProfile.address}
                            onChange={handleInputChange}
                            placeholder='Адреса'
                            className='profile-input'
                        />
                        <button onClick={handleSaveChanges} className='profile-save-button'>
                            Зберегти зміни
                        </button>
                        <button onClick={handleEditToggle} className='profile-cancel-button'>
                            Скасувати
                        </button>
                    </>
                ) : (
                    <>
                        <h1>{userProfile.firstName} {userProfile.lastName}</h1>
                        <p>Юзернейм: {userProfile.username}</p>
                        <p>Пошта: {userProfile.email}</p>
                        <p>Рік народження: {userProfile.birthYear}</p>
                        <p>Стать: {userProfile.gender}</p>
                        <p>Тип користувача: {userProfile.userType}</p>
                        <p>Номер телефону: {userProfile.phoneNumber}</p>
                        <p>Адреса: {userProfile.address}</p>
                        <button onClick={handleEditToggle} className='profile-edit-button'>
                            Змінити профіль
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Profile;

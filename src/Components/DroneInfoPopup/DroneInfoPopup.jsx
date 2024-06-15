import React from 'react';
import './DroneInfoPopup.css';

const DroneInfoPopup = ({ drone, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Інформація про БПЛА</h2>
                <p><strong>Серійний номер:</strong> {drone.serialNumber}</p>
                <p><strong>Власник:</strong> {drone.owner}</p>
                <p><strong>Тип:</strong> {drone.type}</p>
                <p><strong>Максимальна висота:</strong> {drone.maxAltitude}</p>
                <p><strong>Максимальна швидкість:</strong> {drone.maxSpeed}</p>
                <p><strong>Статус:</strong> {drone.status}</p>
                <p><strong>Дата, коли стоворено:</strong> {drone.lastFlightDate}</p>
                <p><strong>Країна виробник:</strong> {drone.CountryMade}</p>
                <p><strong>Потужність акумулятора:</strong> {drone.maxCapacity}</p>
                <p><strong>Вага:</strong> {drone.weight}</p>
                <button onClick={onClose}>Закрити</button>
            </div>
        </div>
    );
};

export default DroneInfoPopup;
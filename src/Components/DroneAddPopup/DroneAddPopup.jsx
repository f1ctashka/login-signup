import React, { useState } from 'react';
import './DroneAddPopup.css';

const DroneAddPopup = ({ onSave, onClose }) => {
    const [newDrone, setNewDrone] = useState({
        serialNumber: '',
        owner: '',
        type: '',
        maxAltitude: '',
        maxSpeed: '',
        status: '',
        lastFlightDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDrone(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(newDrone);
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Додати БПЛА</h2>
                <form>
                    <label>
                        Серійний номер:
                        <input type="text" name="serialNumber" value={newDrone.serialNumber} onChange={handleChange} />
                    </label>
                    <label>
                        Власник:
                        <input type="text" name="owner" value={newDrone.owner} onChange={handleChange} />
                    </label>
                    <label>
                        Тип:
                        <input type="text" name="type" value={newDrone.type} onChange={handleChange} />
                    </label>
                    <label>
                        Максимальна висота:
                        <input type="text" name="maxAltitude" value={newDrone.maxAltitude} onChange={handleChange} />
                    </label>
                    <label>
                        Максимальна швидкість:
                        <input type="text" name="maxSpeed" value={newDrone.maxSpeed} onChange={handleChange} />
                    </label>
                </form>
                <button onClick={handleSave}>Зберегти</button>
                <button onClick={onClose}>Закрити</button>
            </div>
        </div>
    );
};

export default DroneAddPopup;


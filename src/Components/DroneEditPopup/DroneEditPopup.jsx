import React, { useState } from 'react';
import './DroneEditPopup.css';

const DroneEditPopup = ({ drone, onSave, onClose }) => {
    const [editedDrone, setEditedDrone] = useState(drone);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedDrone(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(editedDrone);
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Змінити БПЛА</h2>
                <form>
                    <label>
                        Серійний номер:
                        <input type="text" name="serialNumber" value={editedDrone.serialNumber} onChange={handleChange} />
                    </label>
                    <label>
                        Власник:
                        <input type="text" name="owner" value={editedDrone.owner} onChange={handleChange} />
                    </label>
                    <label>
                        Тип:
                        <input type="text" name="type" value={editedDrone.type} onChange={handleChange} />
                    </label>
                    <label>
                        Максимальна висота:
                        <input type="text" name="maxAltitude" value={editedDrone.maxAltitude} onChange={handleChange} />
                    </label>
                    <label>
                        Максимальна швидкість:
                        <input type="text" name="maxSpeed" value={editedDrone.maxSpeed} onChange={handleChange} />
                    </label>
                </form>
                <button onClick={handleSave}>Зберегти</button>
                <button onClick={onClose}>Закрити</button>
            </div>
        </div>
    );
};

export default DroneEditPopup;
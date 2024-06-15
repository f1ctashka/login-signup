import React, { useState } from 'react';
import './MainMenu.css';
import About from '../About/About';
import Contacts from "../Contacts/Contacts";
import Profile from "../Profile/Profile";
import Map from "../Map/Map";
import DroneInfoPopup from '../DroneInfoPopup/DroneInfoPopup';
import DroneEditPopup from '../DroneEditPopup/DroneEditPopup';
import DroneAddPopup from '../DroneAddPopup/DroneAddPopup';

const MainMenu = () => {
    const [currentPage, setCurrentPage] = useState('myDrones');
    const [showDroneInfo, setShowDroneInfo] = useState(false);
    const [selectedDrone, setSelectedDrone] = useState(null);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showAddPopup, setShowAddPopup] = useState(false);
    const [sortOption, setSortOption] = useState({ type: 'status', reverse: false });
    const [searchQuery, setSearchQuery] = useState('');
        const [droneData, setDroneData] = useState([
        { serialNumber: 'DR12345', owner: 'Степанюк Олег', type: 'Квадрокоптер', maxAltitude: '120м', maxSpeed: '60км/год', status: 'Літає', lastFlightDate: '2024-05-30', path: [{ lat: 50.4501, lng: 30.5234 }, { lat: 50.4507, lng: 30.5245 }, { lat: 50.4515, lng: 30.5258 }, { lat: 50.4523, lng: 30.5270 }], weight: '250кг', maxCapacity: '86 кВт' , CountryMade: 'Україна'},
        { serialNumber: 'DR56789', owner: 'Іванченко Іван', type: 'Гексакоптер', maxAltitude: '100м', maxSpeed: '50км/год', status: 'Неактивний', lastFlightDate: '2024-04-25', path: [{ lat: 46.4825, lng: 30.7233 }, { lat: 46.4835, lng: 30.7243 }, { lat: 46.4845, lng: 30.7253 }, { lat: 46.4855, lng: 30.7263 }] },
        { serialNumber: 'DR98765', owner: 'Вадим Робертс', type: 'Октокоптер', maxAltitude: '150m', maxSpeed: '70km/h', status: 'Active', lastFlightDate: '2024-05-01', path: [{ lat: 48.9226, lng: 24.7097 }, { lat: 48.9236, lng: 24.7107 }, { lat: 48.9246, lng: 24.7117 }, { lat: 48.9256, lng: 24.7127 }] },
        { serialNumber: 'DR24680', owner: 'Аліса Федоренко', type: 'Квадрокоптер', maxAltitude: '110m', maxSpeed: '55km/h', status: 'Active', lastFlightDate: '2024-05-05', path: [{ lat: 50.4567, lng: 30.5250 }, { lat: 50.4575, lng: 30.5260 }, { lat: 50.4583, lng: 30.5270 }, { lat: 50.4591, lng: 30.5280 }] },
        { serialNumber: 'DR13579', owner: 'Таїісія Орленко', type: 'Ударний БПЛА', maxAltitude: '130m', maxSpeed: '65km/h', status: 'Inactive', lastFlightDate: '2024-05-03', path: [{ lat: 50.4587, lng: 30.5270 }, { lat: 50.4595, lng: 30.5280 }, { lat: 50.4603, lng: 30.5290 }, { lat: 50.4611, lng: 30.5300 }] },
        { serialNumber: 'DR11223', owner: 'Данило Крилов', type: 'Октокоптер', maxAltitude: '140m', maxSpeed: '68km/h', status: 'Active', lastFlightDate: '2024-04-29', path: [{ lat: 50.4527, lng: 30.5280 }, { lat: 50.4535, lng: 30.5290 }, { lat: 50.4543, lng: 30.5300 }, { lat: 50.4551, lng: 30.5310 }] },
        { serialNumber: 'DR44556', owner: 'eve_miller', type: 'Quadcopter', maxAltitude: '115m', maxSpeed: '58km/h', status: 'Inactive', lastFlightDate: '2024-04-27', path: [{ lat: 50.4540, lng: 30.5290 }, { lat: 50.4548, lng: 30.5300 }, { lat: 50.4556, lng: 30.5310 }, { lat: 50.4564, lng: 30.5320 }] },
        { serialNumber: 'DR77889', owner: 'frank_wilson', type: 'Hexacopter', maxAltitude: '125m', maxSpeed: '62km/h', status: 'Active', lastFlightDate: '2024-04-26', path: [{ lat: 50.4560, lng: 30.5310 }, { lat: 50.4568, lng: 30.5320 }, { lat: 50.4576, lng: 30.5330 }, { lat: 50.4584, lng: 30.5340 }] },
        { serialNumber: 'DR99001', owner: 'grace_lee', type: 'Octocopter', maxAltitude: '135m', maxSpeed: '66km/h', status: 'Inactive', lastFlightDate: '2024-05-02', path: [{ lat: 50.4580, lng: 30.5330 }, { lat: 50.4588, lng: 30.5340 }, { lat: 50.4596, lng: 30.5350 }, { lat: 50.4604, lng: 30.5360 }] },
        { serialNumber: 'DR22445', owner: 'hannah_moore', type: 'Quadcopter', maxAltitude: '122m', maxSpeed: '60km/h', status: 'Active', lastFlightDate: '2024-05-04', path: [{ lat: 50.4600, lng: 30.5350 }, { lat: 50.4608, lng: 30.5360 }, { lat: 50.4616, lng: 30.5370 }, { lat: 50.4624, lng: 30.5380 }] },
        { serialNumber: 'DR33333', owner: 'ivan_petro', type: 'Hexacopter', maxAltitude: '105m', maxSpeed: '55km/h', status: 'Active', lastFlightDate: '2024-05-06', path: [{ lat: 50.4611, lng: 30.5361 }, { lat: 50.4619, lng: 30.5371 }, { lat: 50.4627, lng: 30.5381 }, { lat: 50.4635, lng: 30.5391 }] },
        { serialNumber: 'DR44444', owner: 'Я', type: 'Квадрокоптер', maxAltitude: '115м', maxSpeed: '57км/год', status: 'Неактивний', lastFlightDate: '2024-05-07', path: [{ lat: 50.4454, lng: 30.5910 }, { lat: 50.4334, lng: 30.5927 }, { lat: 50.4337, lng: 30.5966 }, { lat: 50.4355, lng: 30.6010 }] },
        { serialNumber: 'DR55555', owner: 'Я', type: 'Октокоптер', maxAltitude: '150м', maxSpeed: '75км/год', status: 'Літає', lastFlightDate: '2024-05-08', path: [{ lat: 50.4633, lng: 30.5383 }, { lat: 50.4641, lng: 30.5393 }, { lat: 50.4649, lng: 30.5403 }, { lat: 50.4657, lng: 30.5413 }] },
    ]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleEditDrone = (drone) => {
        setSelectedDrone(drone);
        setShowEditPopup(true);
    };

    const handleSaveDrone = (updatedDrone) => {
        setDroneData(droneData.map(drone => drone.serialNumber === updatedDrone.serialNumber ? updatedDrone : drone));
        setShowEditPopup(false);
    };

    const handleAddDrone = (newDrone) => {
        setDroneData([...droneData, newDrone]);
        setShowAddPopup(false);
    };

    const handleDeleteDrone = (serialNumber) => {
        setDroneData(droneData.filter(drone => drone.serialNumber !== serialNumber));
    };

    const handleSortChange = (e) => {
        const { value } = e.target;
        const [type, order] = value.split('_');
        setSortOption({ type, reverse: order === 'desc' });
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleShowDroneInfo = (drone) => {
        setSelectedDrone(drone);
        setShowDroneInfo(true);
    };

    const handleShowDronePath = (drone) => {
        setSelectedDrone(drone);
    };

    const filteredDroneData = droneData.filter(drone =>
        drone.serialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        drone.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
        drone.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedDroneData = [...filteredDroneData].sort((a, b) => {
        if (sortOption.type === 'status') {
            return sortOption.reverse ? b.status.localeCompare(a.status) : a.status.localeCompare(b.status);
        } else if (sortOption.type === 'date') {
            return sortOption.reverse ? new Date(b.lastFlightDate) - new Date(a.lastFlightDate) : new Date(a.lastFlightDate) - new Date(b.lastFlightDate);
        }
        return 0;
    });

    return (

        <div className='menu-container'>
            <div className='menu'>
                <div className={`menu-item ${currentPage === 'map' ? 'active' : ''}`} onClick={() => handlePageChange('map')}>
                    Карта
                </div>
                <div className={`menu-item ${currentPage === 'myDrones' ? 'active' : ''}`} onClick={() => handlePageChange('myDrones')}>
                    Усі БПЛА
                </div>
                <div className={`menu-item ${currentPage === 'project' ? 'active' : ''}`} onClick={() => handlePageChange('project')}>
                    Про проєкт
                </div>
                <div className={`menu-item ${currentPage === 'contacts' ? 'active' : ''}`} onClick={() => handlePageChange('contacts')}>
                    Контакти
                </div>
                <div className={`menu-item ${currentPage === 'profile' ? 'active' : ''}`} onClick={() => handlePageChange('profile')}>
                    Профіль
                </div>
            </div>

            <div>
                {currentPage === 'map' && (
                    <div className='content'>
                        <div className='search-info'>
                            <h1>Пошук БПЛА</h1>
                            <div className='search-bar'>
                                <input type="text" placeholder="Пошук..." value={searchQuery} onChange={handleSearchChange} />
                            </div>
                            <table>
                                <thead>
                                <tr>
                                    <th>Серійний номер</th>
                                    <th>Власник</th>
                                    <th>Тип</th>
                                    <th>Дії</th>
                                </tr>
                                </thead>
                                <tbody>
                                {filteredDroneData.map(drone => (
                                    <tr key={drone.serialNumber}>
                                        <td onClick={() => handleShowDronePath(drone)}>{drone.serialNumber}</td>
                                        <td>{drone.owner}</td>
                                        <td>{drone.type}</td>
                                        <td>
                                            <button className='info-drone-button' onClick={() => handleShowDroneInfo(drone)}>Інформація</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='map-info'>
                            <Map selectedDrone={selectedDrone} />
                        </div>
                    </div>
                )}
                {currentPage === 'myDrones' && (
                    <div>
                        <h1>Мої БПЛА</h1>
                        <button className="add-drone-button" onClick={() => setShowAddPopup(true)}>Додати БПЛА</button>
                        <div className="search-bar">
                            <input type="text" placeholder="Пошук БПЛА..." value={searchQuery} onChange={handleSearchChange} />
                        </div>
                        <div className="sort-options">
                            <label htmlFor="sort">Сортувати за:</label>
                            <select id="sort" onChange={handleSortChange}>
                                <option value="status_asc">Статус (за зростанням)</option>
                                <option value="status_desc">Статус (за спаданням)</option>
                                <option value="date_asc">Дата (за зростанням)</option>
                                <option value="date_desc">Дата (за спаданням)</option>
                            </select>
                        </div>
                        <table className="drone-table">
                            <thead>
                            <tr>
                                <th>Серійний номер</th>
                                <th>Власник</th>
                                <th>Тип</th>
                                <th>Максимальна висота</th>
                                <th>Максимальна швидкість</th>
                                <th>Статус</th>
                                <th>Останній політ</th>
                                <th>Дії</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sortedDroneData.map(drone => (
                                <tr key={drone.serialNumber}>
                                    <td onClick={() => handleShowDronePath(drone)}>{drone.serialNumber}</td>
                                    <td>{drone.owner}</td>
                                    <td>{drone.type}</td>
                                    <td>{drone.maxAltitude}</td>
                                    <td>{drone.maxSpeed}</td>
                                    <td>{drone.status}</td>
                                    <td>{drone.lastFlightDate}</td>
                                    <td>
                                        <button className="edit-drone-button" onClick={() => handleEditDrone(drone)}>Редагувати</button>
                                        <button className="delete-drone-button" onClick={() => handleDeleteDrone(drone.serialNumber)}>Видалити</button>
                                        <button className="info-drone-button" onClick={() => handleShowDroneInfo(drone)}>Інформація</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {currentPage === 'project' && <About />}
                {currentPage === 'contacts' && <Contacts />}
                {currentPage === 'profile' && <Profile />}
            </div>

            {showDroneInfo && selectedDrone && (
                <DroneInfoPopup
                    drone={selectedDrone}
                    onClose={() => setShowDroneInfo(false)}
                    onEdit={() => handleEditDrone(selectedDrone)}
                    onDelete={() => handleDeleteDrone(selectedDrone.serialNumber)}
                />
            )}

            {showEditPopup && selectedDrone && (
                <DroneEditPopup
                    drone={selectedDrone}
                    onClose={() => setShowEditPopup(false)}
                    onSave={handleSaveDrone}
                />
            )}

            {showAddPopup && (
                <DroneAddPopup
                    onClose={() => setShowAddPopup(false)}
                    onAdd={handleAddDrone}
                />
            )}
        </div>
    );
};

export default MainMenu;

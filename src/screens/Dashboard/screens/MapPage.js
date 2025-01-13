import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faEye, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/map.css';

function MapPage() {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newService, setNewService] = useState({ email: '', number: '', address: '' });
  const [currentService, setCurrentService] = useState(null);
  const [notification, setNotification] = useState('');

  const handleAddService = () => {
    const { email, number, address } = newService;
    const newServiceItem = {
      id: services.length + 1,
      email,
      number,
      address,
    };
    setServices([...services, newServiceItem]);
    setShowAddModal(false);
    setNewService({ email: '', number: '', address: '' });
  };

  const handleEditService = (field, value) => {
    const updatedServices = services.map(service =>
      service.id === currentService.id ? { ...service, [field]: value } : service
    );
    setServices(updatedServices);
    setCurrentService(null);
    setShowEditModal(false);
  };

  const handleDeleteService = (id) => {
    const updatedServices = services.filter(service => service.id !== id);
    setServices(updatedServices);
    setNotification('Service deleted');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = services.filter(service =>
      service.email.toLowerCase().includes(term) ||
      service.number.toLowerCase().includes(term) ||
      service.address.toLowerCase().includes(term)
    );
    setServices(filtered);
  };

  return (
    <div>
      <h1>Info Page</h1>
      <br/>

      {/* Notification */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      {/* Conteneur pour le bouton et le champ de recherche */}
      <div className="top-controls">
        <div className="button-container">
          <button
            className="add-service-button"
            onClick={() => setShowAddModal(true)}
            disabled={services.length > 0}
          >
            <FontAwesomeIcon icon={faPlus} /> Add Entry
          </button>
          {services.length > 0 && (
            <div className="info-message">You can only add new entries when there are no existing entries.</div>
          )}
        </div>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search entries..."
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      {/* Affichage des services sous forme de cartes */}
      <div className="card-container">
        {services.length === 0 ? (
          <div style={{ textAlign: 'center' }}>No entries available</div>
        ) : (
          services.map(service => (
            <div key={service.id} className="service-card">
              <div className="card-group">
                <div className="card email-card">
                  <h3>Email</h3>
                  <p>{service.email}</p>
                  <button onClick={() => { setCurrentService({ ...service, field: 'email' }); setShowEditModal(true); }}>Edit</button>
                </div>
                <div className="card number-card">
                  <h3>Number</h3>
                  <p>{service.number}</p>
                  <button onClick={() => { setCurrentService({ ...service, field: 'number' }); setShowEditModal(true); }}>Edit</button>
                </div>
                <div className="card address-card">
                  <h3>Address</h3>
                  <p>{service.address}</p>
                  <button onClick={() => { setCurrentService({ ...service, field: 'address' }); setShowEditModal(true); }}>Edit</button>
                </div>
              </div>
              <div className="service-card-actions">
                <button onClick={() => handleDeleteService(service.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Entry Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Entry</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddService(); }}>
              <label>
                Email:
                <input
                  type="email"
                  value={newService.email}
                  onChange={(e) => setNewService({ ...newService, email: e.target.value })}
                  required
                />
              </label>
              <label>
                Number:
                <input
                  type="text"
                  value={newService.number}
                  onChange={(e) => setNewService({ ...newService, number: e.target.value })}
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  value={newService.address}
                  onChange={(e) => setNewService({ ...newService, address: e.target.value })}
                  required
                />
              </label>
              <button type="submit">Add Entry</button>
              <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Entry Modal */}
      {showEditModal && currentService && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Entry</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleEditService(currentService.field, e.target[0].value); }}>
              <label>
                {currentService.field.charAt(0).toUpperCase() + currentService.field.slice(1)}:
                <input
                  type="text"
                  defaultValue={currentService[currentService.field]}
                  required
                />
              </label>
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MapPage;

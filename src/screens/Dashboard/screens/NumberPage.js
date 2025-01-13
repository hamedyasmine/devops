import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faEye, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/service.css';

function NumberPage() {
  const [services, setServices] = useState([]); // Commencer avec un tableau vide
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newService, setNewService] = useState({ title: '', number: '' });
  const [currentService, setCurrentService] = useState(null);
  const [notification, setNotification] = useState('');

  const handleAddService = () => {
    setServices([
      ...services,
      {
        id: services.length + 1,
        title: newService.title,
        number: newService.number,
      },
    ]);
    setShowAddModal(false);
    setNewService({ title: '', number: '' });
  };

  const handleEditService = () => {
    setServices(services.map(service =>
      service.id === currentService.id ? currentService : service
    ));
    setShowEditModal(false);
    setCurrentService(null);
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
    setNotification('Service deleted');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleViewService = (service) => {
    setCurrentService(service);
    setShowViewModal(true);
  };

  const handleSearch = () => {
    // Filtre les services en fonction du terme de recherche
    const filteredServices = services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setServices(filteredServices);
  };

  return (
    <div>
      <h1>Numbers</h1>
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
          <button className="add-service-button" onClick={() => setShowAddModal(true)}>
            <FontAwesomeIcon icon={faPlus} /> Add Number
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search numbers..."
          />
          <button className="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>No numbers available</td>
            </tr>
          ) : (
            services.map(service => (
              <tr key={service.id}>
                <td>{service.title}</td>
                <td>{service.number}</td>
                <td>
                  <div className="icon-container">
                    <button onClick={() => { setCurrentService(service); setShowEditModal(true); }}>
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button onClick={() => handleDeleteService(service.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button onClick={() => handleViewService(service)}>
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Add Number Modal */}
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Number</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddService(); }}>
              <label>
                Title:
                <input
                  type="text"
                  value={newService.title}
                  onChange={(e) => setNewService({ ...newService, title: e.target.value })}
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
              <button type="submit">Add Number</button>
              <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      {/* View Number Modal */}
      {showViewModal && currentService && (
        <div className="modal">
          <div className="modal-content">
            <h2>View Number</h2>
            <p><strong>Title:</strong> {currentService.title}</p>
            <p><strong>Number:</strong> {currentService.number}</p>
            <button type="button" onClick={() => setShowViewModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Edit Number Modal */}
      {showEditModal && currentService && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Number</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleEditService(); }}>
              <label>
                Title:
                <input
                  type="text"
                  value={currentService.title}
                  onChange={(e) => setCurrentService({ ...currentService, title: e.target.value })}
                  required
                />
              </label>
              <label>
                Number:
                <input
                  type="text"
                  value={currentService.number}
                  onChange={(e) => setCurrentService({ ...currentService, number: e.target.value })}
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

export default NumberPage;

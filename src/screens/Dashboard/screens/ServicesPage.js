import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faEye, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/service.css';
import axios from 'axios';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newService, setNewService] = useState({ icon: '', title: '', description: '' });
  const [currentService, setCurrentService] = useState(null);
  const [notification, setNotification] = useState('');
  const [file, setFile] = useState(null);

  
  const handleAddService = () => {
    setServices([
      ...services,
      {
        id: services.length + 1,
        icon: file ? URL.createObjectURL(file) : '', 
        title: newService.title,
        description: newService.description,
      },
    ]);
    setShowAddModal(false);
    setNewService({ icon: '', title: '', description: '' });
    setFile(null);
  };
  const createService = async (icon, title, description) =>{
    try{
      const response = await axios.post('http://localhost:3001/api/posts', {
        "icon": "icon",
        "title": newService.title,
        "description": newService.description
      });
      console.log('Service created successfully:', response.data);
    return response.data;

    }catch(error){
      console.log(error)
    }
  }

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
    const filteredServices = services.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setServices(filteredServices);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <h1>Services</h1>
      <br/>

      {/* Notification */}
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      
      <div className="top-controls">
        <div className="button-container">
          <button className="add-service-button" onClick={() => setShowAddModal(true)}>
            <FontAwesomeIcon icon={faPlus} /> Add Service
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search services..."
          />
          <button className="search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No services available</td>
            </tr>
          ) : (
            services.map(service => (
              <tr key={service.id}>
                <td>
                  {service.icon ? (
                    <img src={service.icon} alt="Icon" style={{ width: '24px', height: '24px' }} />
                  ) : (
                    <span>No icon selected</span> 
                  )}
                </td>
                <td>{service.title}</td>
                <td>{service.description}</td>
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

      
      {showAddModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Service</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddService(); }}>
              <label>
                Icon:
                <input
                  type="file"
                  onChange={handleFileChange}
                />
              </label>
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
                Description:
                <input
                  type="text"
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  required
                />
              </label>
              <button type="submit" onClick={createService}>Add Service</button>
              <button type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}

     
      {showViewModal && currentService && (
        <div className="modal">
          <div className="modal-content">
            <h2>View Service</h2>
            <p><strong>Icon:</strong> {currentService.icon ? <img src={currentService.icon} alt="Icon" style={{ width: '24px', height: '24px' }} /> : 'No icon selected'}</p>
            <p><strong>Title:</strong> {currentService.title}</p>
            <p><strong>Description:</strong> {currentService.description}</p>
            <button type="button" onClick={() => setShowViewModal(false)}>Close</button>
          </div>
        </div>
      )}

      
      {showEditModal && currentService && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Service</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleEditService(); }}>
              <label>
                Icon:
                <input
                  type="file"
                  onChange={(e) => setCurrentService({ ...currentService, icon: URL.createObjectURL(e.target.files[0]) })}
                />
              </label>
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
                Description:
                <input
                  type="text"
                  value={currentService.description}
                  onChange={(e) => setCurrentService({ ...currentService, description: e.target.value })}
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

export default ServicesPage;

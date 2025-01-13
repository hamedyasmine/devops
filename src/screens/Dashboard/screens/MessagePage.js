import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/message.css'; // Assurez-vous que le chemin du fichier CSS est correct

function MessagePage() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'John Doe', subject: 'Inquiry', email: 'john.doe@example.com', message: 'I have a question about your services.', date: '2024-08-08' },
    { id: 2, name: 'Jane Smith', subject: 'Feedback', email: 'jane.smith@example.com', message: 'Great experience with your company!', date: '2024-08-07' },
    // Ajoutez d'autres messages ici
  ]);
  const [filteredMessages, setFilteredMessages] = useState(messages);
  const [filterTerm, setFilterTerm] = useState('');
  const [filterType, setFilterType] = useState('name'); // 'name' ou 'date'
  const [currentMessage, setCurrentMessage] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [notification, setNotification] = useState('');

  const handleFilterChange = (e) => {
    const term = e.target.value;
    setFilterTerm(term);
    filterMessages(term, filterType);
  };

  const handleFilterTypeChange = (e) => {
    const type = e.target.value;
    setFilterType(type);
    filterMessages(filterTerm, type);
  };

  const filterMessages = (term, type) => {
    const filtered = messages.filter(message =>
      message[type].toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMessages(filtered);
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(message => message.id !== id));
    setFilteredMessages(filteredMessages.filter(message => message.id !== id));
    setNotification('Message deleted');
    setTimeout(() => setNotification(''), 3000);
  };

  const handleViewMessage = (message) => {
    setCurrentMessage(message);
    setShowViewModal(true);
  };

  return (
    <div className="col-lg-6">
      <div className="au-card au-card--no-shadow au-card--no-pad m-b-40">
        <div className="au-card-title">
          <h3>
            <FontAwesomeIcon icon={faEye} />  Messages
          </h3>
         
        </div>

        {/* Filtrage */}
        <div className="filter-controls">
          <input
            type="text"
            value={filterTerm}
            onChange={handleFilterChange}
            placeholder="Search..."
          />
          <select value={filterType} onChange={handleFilterTypeChange}>
            <option value="name">Name</option>
            <option value="date">Date</option>
          </select>
        </div>

        <div className="au-inbox-wrap js-inbox-wrap">
          <div className="au-message">
            <div className="au-message__noti">
              <p>You Have
                <span>{filteredMessages.length}</span>
                 messages
              </p>
            </div>
            <div className="au-message-list">
              {filteredMessages.length === 0 ? (
                <div style={{ textAlign: 'center' }}>No messages available</div>
              ) : (
                filteredMessages.map(message => (
                  <div key={message.id} className="au-message__item">
                    <div className="au-message__item-inner">
                      <div className="au-message__item-text">
                        <div className="text">
                          <h5 className="name">{message.name}</h5>
                          <p><strong>Subject:</strong> {message.subject}</p>
                          <p><strong>Email:</strong> {message.email}</p>
                          <p><strong>Message:</strong> {message.message}</p>
                        </div>
                      </div>
                      <div className="au-message__item-time">
                        <span>{message.date}</span>
                      </div>
                      <div className="au-message__item-actions">
                        <button onClick={() => handleViewMessage(message)}>
                          <FontAwesomeIcon icon={faEye} /> View
                        </button>
                        <button onClick={() => handleDeleteMessage(message.id)}>
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* View Message Modal */}
      {showViewModal && currentMessage && (
        <div className="modal">
          <div className="modal-content">
            <h2>View Message</h2>
            <p><strong>Name:</strong> {currentMessage.name}</p>
            <p><strong>Subject:</strong> {currentMessage.subject}</p>
            <p><strong>Email:</strong> {currentMessage.email}</p>
            <p><strong>Message:</strong> {currentMessage.message}</p>
            <p><strong>Date:</strong> {currentMessage.date}</p>
            <button type="button" onClick={() => setShowViewModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagePage;

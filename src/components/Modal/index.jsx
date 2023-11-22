import React, { useState } from 'react';
import "./index.css"

const ModalExample = () => {

  const [ModalOpen, setModalOpen] = useState(false);

 
  const openModal = () => {
    setModalOpen(true);
  };

 
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Modalı Aç</button>

      {ModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Modalin icinde yazi varrrr</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
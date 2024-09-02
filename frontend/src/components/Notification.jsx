import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

const Notification = ({ message, onClose, onConfirm, showButtons }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      setShow(true); 
    }
  }, [message]);

  const handleConfirm = () => {
    setShow(false); 
    if (onConfirm) {
      onConfirm(); 
    }
  };

  const handleCancel = () => {
    setShow(false);
    if (onClose) {
      onClose();
    }
    if (!showButtons) {
      navigate('/profile'); 
    }
  };

  return (
    <div className={`notification ${show ? 'show' : 'hide'}`}>
      <p>{message}</p>
      {showButtons ? (
        <div>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button onClick={handleCancel}>Close</button>
      )}
    </div>
  );
};

export default Notification;

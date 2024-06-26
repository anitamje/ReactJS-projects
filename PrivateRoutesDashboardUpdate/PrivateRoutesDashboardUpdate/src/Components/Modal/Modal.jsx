import React from 'react';
import "./modal.scss";

const Modal = ({ isOpen, title, children, close }) => {
  if (!isOpen) {
    return;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={() => close()}>X</button>
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </div>
  )
}

export default Modal;

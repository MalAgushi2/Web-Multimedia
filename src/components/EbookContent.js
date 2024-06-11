// src/components/EbookContent.js
import React from 'react';
import './EbookContent.css';

const EbookContent = ({ title, content, onClose }) => {
  return (
    <div className="ebook-content">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default EbookContent;

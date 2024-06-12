import React from 'react';
import './EbookCover.css';

const EbookCover = ({ coverImage, title, onClick }) => (
  <div className="ebook-cover" onClick={onClick}>
    <img src={coverImage} alt={title} />
    <h3>{title}</h3>
  </div>
);

export default EbookCover;

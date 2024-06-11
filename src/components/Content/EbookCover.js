// src/components/EbookCover.js
/*import React from 'react';
import './EbookCover.css';

const EbookCover = ({ coverImage, title, onClick }) => {
  return (
    <div className="ebook-cover" onClick={onClick}>
      <img src={coverImage} alt={`${title} cover`} />
      <h3>{title}</h3>
    </div>
  );
};

export default EbookCover;*/
// src/components/EbookCover.js
import React from 'react';
import './EbookCover.css';

const EbookCover = ({ coverImage, title, onClick }) => {
  return (
    <div className="ebook-cover" onClick={onClick}>
      <img src={coverImage} alt={`${title} cover`} />
      <h3>{title}</h3>
    </div>
  );
};

export default EbookCover;


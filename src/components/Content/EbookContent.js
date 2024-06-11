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

export default EbookCover;
*/
// src/components/EbookContent.js
import React from 'react';
import './EbookContent.css';

const EbookContent = ({ title, content, onClose }) => {
  return (
    <div className="ebook-content">
      <button onClick={onClose}>Close</button>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default EbookContent;

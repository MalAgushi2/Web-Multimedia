// src/components/EbookList.js
import React, { useState } from 'react';
import EbookCover from './EbookCover';
import EbookContent from './EbookContent';
import './EbookList.css';

const ebooks = [
  {
    id: 1,
    title: 'Ebook One',
    coverImage: 'https://via.placeholder.com/150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Ebook Two',
    coverImage: 'https://via.placeholder.com/150',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'Ebook Three',
    coverImage: 'https://via.placeholder.com/150',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const EbookList = () => {
  const [selectedEbook, setSelectedEbook] = useState(null);

  const handleEbookClick = (ebook) => {
    setSelectedEbook(ebook);
  };

  const handleClose = () => {
    setSelectedEbook(null);
  };

  if (selectedEbook) {
    return <EbookContent title={selectedEbook.title} content={selectedEbook.content} onClose={handleClose} />;
  }

  return (
    <div className="ebook-list">
      {ebooks.map((ebook) => (
        <EbookCover
          key={ebook.id}
          coverImage={ebook.coverImage}
          title={ebook.title}
          onClick={() => handleEbookClick(ebook)}
        />
      ))}
    </div>
  );
};

export default EbookList;

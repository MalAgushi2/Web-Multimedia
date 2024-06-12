import React, { useState } from 'react';
import EbookCover from './EbookCover'; // Make sure this path is correct
import EbookContent from './EbookContent'; // Import EbookContent here
import './EbookList.css';

const ebooks = [
  {
    id: 1,
    title: 'Ebook One',
    coverImage: 'https://via.placeholder.com/150',
    description: 'A fascinating look into the world of Ebook One.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Ebook Two',
    coverImage: 'https://via.placeholder.com/150',
    description: 'Ebook Two explores the depths of human understanding.',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 3,
    title: 'Ebook Three',
    coverImage: 'https://via.placeholder.com/150',
    description: 'Dive into the intriguing narrative of Ebook Three.',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
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
    return (
      <div>
        <EbookContent title={selectedEbook.title} content={selectedEbook.content} onClose={handleClose} />
      </div>
    );
  }

  return (
    <div className="ebook-list-container">
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
      <div className="ebook-description">
        {ebooks.map((ebook) => (
          <div key={ebook.id}>
            <h3>{ebook.title}</h3>
            <p>{ebook.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EbookList;
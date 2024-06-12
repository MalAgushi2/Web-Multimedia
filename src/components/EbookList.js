import React, { useState } from 'react';
import EbookCover from './EbookCover'; // Ensure the path is correct
import EbookContent from './EbookContent'; // Ensure the path is correct
import './EbookList.css';

const ebooks = [
  {
    id: 1,
    title: 'Ebook One',
    coverImage: 'https://i5.walmartimages.com/seo/Atomic-Habits-An-Easy-Proven-Way-to-Build-Good-Habits-Break-Bad-Ones-Hardcover_b6e2089a-df55-4591-be61-8a0a5098f235_1.17ea5f6d0b173ef95093612afaa355b3.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
    description: 'A fascinating look into the world of Ebook One.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Ebook Two',
    coverImage: 'https://i5.walmartimages.com/seo/Because-I-Had-a-Teacher-9781943200085_c4454d61-23bb-471d-a984-5b79a4468f8c.1a1c799863e8d16702dee781000eeb29.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
    description: 'Ebook Two explores the depths of human understanding.',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 3,
    title: 'Ebook Three',
    coverImage: 'https://i5.walmartimages.com/seo/Emily-Wilde-Emily-Wilde-s-Encyclopaedia-of-Faeries-Series-1-Hardcover-9780593500132_2ae74184-79d9-4b76-958d-4d12bb8628a8.63118554f6b8cc8d6f7579de1b71bf0e.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
    description: 'Dive into the intriguing narrative of Ebook Three.',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    id: 4,
    title: 'Ebook four',
    coverImage: 'https://i5.walmartimages.com/seo/Emily-Wilde-Emily-Wilde-s-Encyclopaedia-of-Faeries-Series-1-Hardcover-9780593500132_2ae74184-79d9-4b76-958d-4d12bb8628a8.63118554f6b8cc8d6f7579de1b71bf0e.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
    description: 'Dive into the intriguing narrative of Ebook Three.',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },{
    id: 5,
    title: 'Ebook five',
    coverImage: 'https://i5.walmartimages.com/seo/Emily-Wilde-Emily-Wilde-s-Encyclopaedia-of-Faeries-Series-1-Hardcover-9780593500132_2ae74184-79d9-4b76-958d-4d12bb8628a8.63118554f6b8cc8d6f7579de1b71bf0e.jpeg?odnHeight=160&odnWidth=160&odnBg=FFFFFF',
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
      {ebooks.map((ebook) => (
        <div key={ebook.id} className="ebook-box">
          <div className="ebook-description">
            <h3>{ebook.title}</h3>
            <p>{ebook.description}</p>
          </div>
          <div className="ebook-cover" onClick={() => handleEbookClick(ebook)}>
            <img src={ebook.coverImage} alt={ebook.title} />
            <h3>{ebook.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EbookList;

import React from 'react';
import './Multimedia.css';

const Multimedia = () => {
    return (
        <div className="multimedia-container">
            <div className="video-container">
                <video autoPlay loop muted className="video">
                <source src="/Për 23 vjetor Libraria Dukagjini ofron zbritje në blerje.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <div className="button-container">
                    <button className="custom-button">Click me</button>
                </div>
            </div>
        </div>
    );
};

export default Multimedia;

import React from 'react';
import './App.css';

const TrackCard = ({ data, beepboxUrl }) => {
  return (
    <div className="card">
      <span className="card__img"></span>
      <div className="card__content">
        <ul className="card__list">
          {data.genres.map((genre, index) => (
            <li key={index} className="card__item">{genre}</li>
          ))}
        </ul>
        <p><strong>Artist:</strong> {data.artist}</p>
        <p><strong>Track:</strong> {data.track}</p>
        <p><strong>Year:</strong> {data.year}</p>
        <br />
        <iframe 
          title={`Beepbox-${data.track}`}
          src={beepboxUrl} 
          width="300" 
          height="80" 
          style={{ borderRadius: '12px', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
};

export default TrackCard;
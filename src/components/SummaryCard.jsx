import React from 'react';
import './SummaryCard.css'

const SummaryCard = ({ point1, point2, nextStop, distance, time }) => {
  return (
    <div className="summary-container">
      <div className="summary-content">
        <div className="summary-points">
          <p><strong>{point1} - {point2}</strong></p>
        </div>
        <p><strong>Next Stop:</strong> {nextStop}</p>
        <div className="summary-distance-time">
          <p>
            <strong>Distance:</strong> {distance} km &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Time:</strong> {time} mins
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
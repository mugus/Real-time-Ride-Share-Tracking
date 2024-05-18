import React from 'react';
import './SummaryCard.css'

const SummaryCard = ({ point1, point2, nextStop, distance, time }) => {
  return (
    <div className="summary-container">
      <div className="summary-content">
        <div className="summary-points">
          <p>
            <strong>Point 1:</strong> Lat: {point1.lat}, Long: {point1.lng}
          </p>
          <p>
            <strong>Point 2:</strong> Lat: {point2.lat}, Long: {point2.lng}
          </p>
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

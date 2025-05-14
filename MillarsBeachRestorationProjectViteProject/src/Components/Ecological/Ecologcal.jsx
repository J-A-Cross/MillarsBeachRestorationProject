import React from 'react';
import './Ecological.css';

const Ecological = () => {
  const pdfUrl = '/src/assets/1365.pdf'; // Update path if needed

  return (
    <div className="ecological-container">
      {/* Full-page banner with background and content */}
      <div className="ecological-banner">
        <div className="banner-content">
          <h1 className="banner-header">Ecological Report</h1>
          <h2 className="banner-subheader">Understanding Our Environment</h2>
          <p className="banner-description">
            This report provides insights into the current state of the local ecology, exploring biodiversity, conservation efforts, and sustainable practices.
          </p>
        </div>
      </div>

      {/* Embedded PDF */}
      <iframe
        src={pdfUrl}
        className="ecological-iframe"
        title="Ecological PDF"
      ></iframe>
    </div>
  );
};

export default Ecological;

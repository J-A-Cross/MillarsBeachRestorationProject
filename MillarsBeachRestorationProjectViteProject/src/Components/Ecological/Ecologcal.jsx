import React from 'react';
import './Ecological.css';

const Ecological = () => {
  const pdfUrl = '/src/assets/1365.pdf'; // Update if needed

  return (
    <div className="ecological-page">
      {/* Banner / Hero Section */}
      <section className="ecological-banner">
        <div className="banner-content">
          <h1>High Value Ecological Report</h1>
          <p>
            Report summary paragraph about when it was conducted and what the document includes.
          </p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="pdf-section">
        <iframe
          src={pdfUrl}
          className="pdf-iframe"
          title="Ecological PDF"
        ></iframe>
      </section>
    </div>
  );
};

export default Ecological;

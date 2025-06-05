import React, { useState, useEffect } from 'react';
import './Certificates.css';

const certificatesData = [
  {
    id: 1,
    title: 'React (Basic) – HackerRank',
    description: 'Certified by HackerRank for foundational skills in React.js and component-based architecture.',
    image: '/React js.jpg'
  },
  {
    id: 2,
    title: 'Web Development – EduSkills Academy',
    description: 'Completed a certified training program in full-stack web development including HTML, CSS, JavaScript, and project building.',
    image: '/EduSkills.jpg'
  },
  {
    id: 3,
    title: 'Frontend Development – One Roadmap',
    description: 'Successfully passed the One Roadmap skill certification test, validating frontend development expertise.',
    image: '/Frontend Development.jpg'
  },
  {
    id: 4,
    title: 'AWS Solutions Architecture – Forage',
    description: 'Completed a virtual simulation in designing scalable and efficient cloud architecture using AWS solutions.',
    image: '/AWS.jpg'
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // ✅ Disable/Enable scroll when modal opens/closes
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean-up on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedCertificate]);

  const handleViewClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certificates-section">
      <h2>My Certificates</h2>
      <div className="certificates-list">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
            <button onClick={() => handleViewClick(cert)}>View</button>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedCertificate.title}</h3>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;

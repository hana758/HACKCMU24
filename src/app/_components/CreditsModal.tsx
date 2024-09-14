import React from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const CreditsModal = ({ open, onClose }) => (
  <Modal 
    open={open} 
    onClose={onClose} 
    center 
    styles={{
      modal: {
        backgroundColor: 'black', // Black background
        color: '#00b0ff', // Slightly blue text
        padding: '2rem',
        maxWidth: '700px', // Larger modal width
        width: '90%',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(0, 192, 255, 0.5)' // Neon/cyberpunk glow effect
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker overlay for the cyberpunk feel
      }
    }}
  >
    <h2 className="text-3xl font-bold" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Credits</h2>
    <div className="mt-4 space-y-4" style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
      <div>
        <h3 className="text-xl font-semibold">Laasya Aki</h3>
        <p>
          <a href="https://github.com/laasyaaki" target="_blank" style={{ color: '#00b0ff' }}>GitHub</a> | 
          <a href="https://www.linkedin.com/in/laasyaaki/" target="_blank" style={{ color: '#00b0ff' }}> LinkedIn</a>
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Hana Benko</h3>
        <p>
          <a href="https://github.com/hana758" target="_blank" style={{ color: '#00b0ff' }}>GitHub</a> | 
          <a href="https://www.linkedin.com/in/hana-benko-842931255/" target="_blank" style={{ color: '#00b0ff' }}> LinkedIn</a>
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Sarah Lu</h3>
        <p>
          <a href="https://github.com/sarahlu0" target="_blank" style={{ color: '#00b0ff' }}>GitHub</a> | 
          <a href="https://www.linkedin.com/in/sarahlu0/" target="_blank" style={{ color: '#00b0ff' }}> LinkedIn</a>
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Jasmine Xu</h3>
        <p>
          <a href="https://github.com/xuja0812" target="_blank" style={{ color: '#00b0ff' }}>GitHub</a> | 
          <a href="https://www.linkedin.com/in/jasmine-jinxuan-xu/" target="_blank" style={{ color: '#00b0ff' }}> LinkedIn</a>
        </p>
      </div>
    </div>
  </Modal>
);

export default CreditsModal;

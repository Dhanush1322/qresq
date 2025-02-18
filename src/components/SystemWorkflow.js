import React from 'react';
import '../css/SystemWorkflow.css';

function SystemWorkflow() {
  return (
    <div className="workflow-container">
      <h2 className="workflow-heading">System Workflow</h2>
      <div className="workflow-line"></div>
      <div className="workflow-box left">
        <h3>01</h3>
        <h4>Generate & Assign QR Code</h4>
        <p className='wp'>Generate a unique QR code for each user when they purchase a QRRESQ tag. Store this QR code in your database with a unique ID.</p>
      </div>
      <div className="workflow-box right">
        <h3>02</h3>
        <h4>Scan & Register</h4>
        <p className='wp'> Users scan the QR code to register their tag with their personal details and emergency contacts.</p>
      </div>
      <div className="workflow-box left">
        <h3>03</h3>
        <h4>Access & Update Information</h4>
        <p className='wp'>Users can update their emergency details anytime through a secure portal.</p>
      </div>
      <div className="workflow-box right">
        <h3>04</h3>
        <h4>Use in Emergency</h4>
        <p className='wp'>In case of an emergency, scanning the QR code provides immediate access to the user’s critical information.</p>
      </div>
    </div>
  );
}

export default SystemWorkflow;

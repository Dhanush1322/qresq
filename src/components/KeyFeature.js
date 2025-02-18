import React from 'react';
import '../css/KeyFeature.css';

function KeyFeature() {
  return (
    <div className="key-feature-container">
      <h2 className="main-heading">Key Features</h2>
      <div className="features-wrapper">
        <div className="feature-box">
          <h3 className='h3'>PRIVACY
PROTECTION
</h3>
          <p className='p'>Ensures contact
details are not shared
during
communications</p>
        </div>
        <div className="feature-box">
          <h3 className='h3'>EMERGENCY
PREPAREDNESS
</h3>
          <p className='p'>Allows addition of
emergency contact details
for critical situations</p>
        </div>
        <div className="feature-box">
          <h3 className='h3'>USER-FRIENDLY
MANAGEMENT
</h3>
          <p className='p'>Manage tags via a dedicated
app; enable/disable features,
check locations, and receive
notifications
</p>
        </div>
      </div>
    </div>
  );
}

export default KeyFeature;
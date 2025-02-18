import React from 'react';
import '../css/Banner.css';
import Appstore from '../assets/appstore.png';
import Playstore from '../assets/playstore.png';
import Video from '../assets/video.mp4'

function Banner() {
  return (
    <div className="banner">
      <video autoPlay loop muted className="background-video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-content">
        <p>Simplifies Emergency</p>
        <div className="button-container">
          {/* Google Play Image with link */}
          <a href="https://play.google.com/store/apps/details?id=com.yourapp" target="_blank" rel="noopener noreferrer">
            <img 
              src={Playstore} 
              alt="Get it on Google Play" 
              className="store-button"
            />
          </a>
          
          {/* App Store Image with link */}
          <a href="https://apps.apple.com/us/app/yourapp/id123456789" target="_blank" rel="noopener noreferrer">
            <img 
              src={Appstore} 
              alt="Download on the App Store" 
              className="store-button"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;

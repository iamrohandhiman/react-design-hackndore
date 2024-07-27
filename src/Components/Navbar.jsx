import React from 'react';
import './Navbar.css'
import image1 from '../Components/Indore_Logo_white_f4384a4187.png'
import image2 from '../Components/indore_map.png'
import image3 from '../Components/get-it-on-google-play-download-app-store-buttons-11639742163asbbzmhqsi-removebg-preview.png'
import image4 from '../Components/water-logo-drop-7.png'
import image5 from '../Components/comet.png'
export const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="logo"> 
          <img src={image1} alt="Indore Logo" />
        </div>
        <div className="spacer"></div>
        <div className="spacer"></div>
      </div>

      <div className="map-container">
        <img src={image2} alt="Indore Map" className="map-image" />
      </div>

      <div className="title">
        Flowing with<br /> 
        <span className="highlight">Solutions</span>
      </div>
      <div className="subtitle">
        Let us know<br /> 
        <span className="highlight-subtitle">and we will fix it</span>
      </div>

      <div className="download-container">
        <img src={image3} alt="Download Button" />
      </div>

      <div className="download-link">
        or click here to download the APK file
      </div>

      <div className="navbar-container">
        <div className="NavBar">
          <div className="navbar-item">
            <img src={image4} alt="Water Logo" className="water-logo" />
            <p>IMC initiative</p>
          </div>
          <div className="spacer"></div>
          <div className="navbar-item">
            <div className="complaint">file a Complaint</div>
            <div className="login">Login</div>
            <img src={image5} alt="Comet" className="comet-logo" />
          </div>
        </div>
      </div>
    </>
  );
};

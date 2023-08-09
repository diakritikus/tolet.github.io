// import * as React from "react"
import banner from './tolet_banner.jpg'
import email_icon from './email_icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

// const Logo = () => (
//   <img src={logo} height="50" width="200"/>
// )

import React, { useState } from 'react';

const Logo = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handlePhoneNumberClick = () => {
    setIsRevealed(true);
  };

  return (
    <div>
      <img src={banner} height="50" width="200"/>
      {/* <img src={email_icon} height="100"/> */}
      <FontAwesomeIcon icon={faPhone} size="3x" beat ></FontAwesomeIcon>
      <span style={{float: "left"}}>Whatsapp, SMS or call:</span>            
      {isRevealed ? (
        <div>
          <span>+36205123836</span>
        </div>
      ) : (
        <span onClick={handlePhoneNumberClick}>          
          <span style={{float: "left"}}>+3620XXXXXXX</span>
        </span>
      )}
    </div>
  );
};

export default Logo

import React from 'react';

import uLogo from '../../assets/universal-logo.png';
import logo20 from '../../assets/20-logo.png';
import mgmLogo from '../../assets/mgm-logo.png';
import wbLogo from '../../assets/wb-logo.png';

function Footer () {
  return (
    <div className="footer">
      <div className="container">
        <p>Trusted by</p>
        <div className="producers">
          <img src={uLogo} alt="Universal"/>
          <img src={logo20} alt="Twenty Century Fox"/>
          <img src={mgmLogo} alt="MGM"/>
          <img src={wbLogo} alt="Warner"/>
        </div>
      </div>
    </div>
  )
}

export default Footer;

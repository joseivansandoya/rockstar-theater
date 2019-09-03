import React from 'react';

import rockstarLogo from '../../assets/rockstar-theaters-logo.png';

function Logo (props) {
  return (
    <a href="#">
      <img className={`logo-${props.size}`} src={rockstarLogo} alt="Rockstar Theaters logo"/>
    </a>
  )
}

export default Logo;

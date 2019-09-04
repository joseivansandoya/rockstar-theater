import React from 'react';
import { Link } from 'react-router-dom';

import rockstarLogo from '../../assets/rockstar-theaters-logo.png';

function Logo (props) {
  return (
    <Link to="/">
      <img className={`logo-${props.size}`} src={rockstarLogo} alt="Rockstar Theaters logo"/>
    </Link>
  )
}

export default Logo;

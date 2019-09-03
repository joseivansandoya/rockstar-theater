import React from 'react';
import Logo from './Logo';
import Filter from './Filter';

function Header (props) {
  const { action } = props;
  const logoSize = action === 'Discover' ? 'lg' : 'sm';
  return (
    <div className="header">
      <div className="container">
        <Logo size={logoSize}/>
        <div className="header-action">
          <h2>{action}</h2>
          {action == 'Discover'&&
            <Filter />
          }
        </div>
      </div>
    </div>
  )
}

export default Header;

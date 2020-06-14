import React, { Fragment } from 'react';

import logoImg from '../../../assets/logo.png';

import './styles.css';
import './responsive.css';

export default function Header(){
  return (
    <Fragment>
      <header className="Header">
        <div className="Header-container">
          <div className="container-img">
            <img 
              src={logoImg}
              alt="FECAP logo"
              title="Logo"
            />
          </div>
        </div>
      </header>
    </Fragment>
  )
}

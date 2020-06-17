import React from 'react';

import './styles.css';

import logoImg from '../../../assets/logo.png';


export default function Header() {
  return (
    <div className="Header">
      <img 
        src={logoImg}      
        alt="Logo FECAP"
        title="Logo FECAP"
      />
    </div>
  )
}

import React, { Fragment } from 'react';

import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import whiteLogo from '../../../assets/logo-white.png';

import './styles.css';
import './responsive.css';

export default function Footer(){
  
  return (
    <Fragment>
      <footer className="footer">
        <div className="footer-img">
          <img 
            src={whiteLogo}
            alt="Logo FECAP white"
            title="Logo FECAP white"
          />
        </div>
        <div className="footer-contacts">
          <a href="/"><FaPhone/> Telefone: (11) 3375-0044</a>
          <a href="/"><FaEnvelope/> E-mail: gestaopublica@fecap.br</a>
          <a href="/"><FaWhatsapp/> Whatsapp: (11) 97121-1053</a>          
        </div>
        <div className="footer-links">
          <FaFacebookF/>
          <FaInstagram />
          <FaTwitter/>          
        </div>
      </footer>
    </Fragment>
  )
}

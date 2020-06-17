import React from 'react';

import Iframe from 'react-iframe';

import './styles.css';
import './responsive.css';

export default function IframeSection(){
  return (
    <div className="digital-ambient">
      <h2>Ambiente Digital</h2>
      <p>Conheça o Ambiente Virtual de Ensino da FECAP abaixo:</p>
        

      {/*DANGEROUSLY **************/}
      <Iframe
        url="https://player.vimeo.com/video/403386729"
        position="relative"
        width="100%"
        height="500px"
        frameBorder="0"
        className="iframe"
      />
      {/*DANGEROUSLY **************/}
    </div>
  )
}

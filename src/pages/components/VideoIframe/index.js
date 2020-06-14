import React, { Fragment } from 'react';
import Iframe from 'react-iframe';

import './styles.css';


export default function VideoIframe() {
  return (
    <Fragment>
      <div className="digital-ambient">
        <h2>Ambiente Digital</h2>
        <p>Conheça o Ambiente Virtual de Ensino da FECAP abaixo:</p>

        <Iframe
          url="https://player.vimeo.com/video/403386729"
          position="relative"
          width="100%"
          height="500px"
          frameBorder="0"
          className="iframe"
        />       

      </div>  

      

    </Fragment>
  )
}

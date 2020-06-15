import React, { Fragment, lazy, Suspense } from 'react';

import './styles.css';

const Iframe = lazy(() => import('react-iframe'));

export default function VideoIframe() {
  return (
    <Fragment>
      <div className="digital-ambient">
        <h2>Ambiente Digital</h2>
        <p>Conheça o Ambiente Virtual de Ensino da FECAP abaixo:</p>

        <Suspense fallback={<p>Carregando iframe ...</p>}>
          <Iframe
            url="https://player.vimeo.com/video/403386729"
            position="relative"
            width="100%"
            height="500px"
            frameBorder="0"
            className="iframe"
          />
        </Suspense>
              

      </div>  

      

    </Fragment>
  )
}

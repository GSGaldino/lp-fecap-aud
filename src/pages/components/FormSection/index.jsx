import React from 'react';
import Hubspotform from 'react-hubspot-form';

import abedImg from '../../../assets/abed.png';

import './styles.css';
import './responsive.css';


export default function FormSection(){
  return (
    <div className="section-top">
        <div className="container-text">
          <div className="container">
            <h1>Pós-graduação on-line em
            Gestão Pública</h1>
            <p>A pós-graduação em Gestão Pública da FECAP lhe dará as ferramentas necessárias para atuar no setor público com conhecimento profundo dos seus processos e uma qualificação adicional.</p>
            <p>Com essa pós em Gestão Pública, você terá os meios para aumentar a sua produtividade e fazer a diferença no primeiro setor. Dessa forma, você terá maior possibilidade de evolução no cargo escolhido.</p>
            <div className="container-logo-abed">
              <img 
                src={abedImg} 
                alt="ABED Logo" 
                title="ABED Logo" 
              />
            </div>
          </div>
        </div>

        <div className="container-form" id="form">
          <div className="background-form">
            <h3>Quer saber mais informações?</h3>
            <Hubspotform 
              portalId="6331207"
              formId="51e56306-d8cc-4376-bde6-e3e96c0228d9"
              loading={<p>Loading form ...</p>}
            />
          </div>
        </div>
      </div>
  )
}

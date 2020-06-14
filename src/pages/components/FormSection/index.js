import React from 'react';
import HubspotForm from 'react-hubspot-form';

import abedImg from '../../../assets/abed.png';

import './styles.css';
import './responsive.css';

export default function FormSection(){
  return (
    <div className="section-top">
        <div className="container-text">
          <div className="container">
            <h1>Pós-graduação on-line em Auditoria</h1>
            <p>A pós-graduação em Auditoria irá capacitar você para dar os próximos passos na sua carreira e conquistar reconhecimento profissional.</p>
            <p>Com este curso, você terá os conhecimentos necessários para atuar com confiança de um especialista  nas suas atividades de auditoria e controle interno.</p>
            <p>Além disso, aprenderá sobre os principais processos utilizadas no mercado como compliance, governança, Sarbanes-Oxley, due diligence, entre outros.</p>
            <div className="container-logo-abed">
              <img src={abedImg} alt="ABED Logo" title="ABED Logo" />
            </div>
          </div>
        </div>

        <div className="container-form" id="form">
          <div className="background-form">
          <h3>Quer saber mais informações?</h3>
            <HubspotForm 
              portalId="6331207"
              formId="51e56306-d8cc-4376-bde6-e3e96c0228d9"
              loading={<p>Loading form ...</p>}
            />
          </div>
        </div>
      </div>
  )
}

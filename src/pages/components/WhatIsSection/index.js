import React from 'react';

import './styles.css';
import './responsive.css';

export default function WhatIsSection(){
  return (
    <div className="what-is">
        <div className="container-what-is">
          <h2>O que é Auditoria?</h2>
        </div>
        <div className="text-what-is">
          <p>Auditoria é uma técnica contábil desenvolvida para alcançar o controle patrimonial e deve ser compreendida como um conjunto de ações de assessoramento e consultoria.</p>
          <p>A verificação de procedimentos e a validação dos controles internos utilizados pela organização, permitem ao auditor emitir uma opinião de aconselhamento.</p>
        </div>
    </div>
  )
}

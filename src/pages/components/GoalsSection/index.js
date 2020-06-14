import React from 'react';
import ContainerGoal from '../ContainerGoal';

import timeImg from '../../../assets/time-img.png';
import dateImg from '../../../assets/date-img.png';
import chargeImg from '../../../assets/charge-img.png';
import infraImg from '../../../assets/infra-img.png';

import './styles.css';
import './responsive.css';

export default function GoalsSection(){
  return (
    <section className="section-goals">
        <div className="goals">
          <div className="goal">
            <ContainerGoal
              img={timeImg}
              imgText={"Tempo de duração"}
              firstText={"Tempo de duração"}
              secondText={"12 meses"}
            />
          </div>
          <div className="goal">
            <ContainerGoal
              img={dateImg}
              imgText={"Data de início"}
              firstText={"Data de início"}
              secondText={"22 de Agosto de 2020"}
            />
          </div>
        </div>

        <div className="goals">
          <div className="goal">
            <ContainerGoal
              img={chargeImg}
              imgText={"Carga horária"}
              firstText={"Carga horária"}
              secondText={"360 horas"}
              shadowed={true}
            />
          </div>

          <div className="goal">
            <ContainerGoal
              img={infraImg}
              imgText={"Infraestrutura"}
              firstText={"Infraestrutura"}
              secondText={"Tenha acesso a toda infraestrutura da FECAP"}
              shadowed={true}
            />
          </div>
        </div>        
      </section>
  )
}

import React from 'react';
import ContainerDiferencial from '../ContainerDiferencial';

import firstImg from '../../../assets/professores-alto-nivel.png';
import secondImg from '../../../assets/suporte-vitalicio.png';
import thirdImg from '../../../assets/excelencia-e-tradicao.png';
import fourthImg from '../../../assets/beneficios-aos-familiares.png';

import './styles.css';
import './responsive.css';

export default function DiferenciaisContainer(){
  return (
    <div className="container-diferenciais">
      <h2>Diferenciais FECAP</h2>
        <div className="diferenciais">
          <div className="diferencial">
            <ContainerDiferencial
              img={firstImg}
              imgTitle={"Professores de alto nível"}
              firstText={"Professores de Alto Nível"}
              secondText={"O corpo docente da FECAP alia formação acadêmica de excelência e relevante experiência profissional – 98% do corpo docente é formado por mestres ou doutores e, anualmente, são oferecidos inúmeros cursos através do Programa de Qualificação Docente para capacitação dos professores."}
            />
          </div>
          <div className="diferencial">
            <ContainerDiferencial
                img={secondImg}
                imgTitle={"Suporte Vitalício"}
                firstText={"Suporte Vitalício"}
                secondText={"Na FECAP a parceria é para a vida toda. Ex-alunos podem utilizar a infraestrutura da instituição e obter descontos especiais em outras especializações."}
            />
          </div>
          <div className="diferencial">
            <ContainerDiferencial
              img={thirdImg}
              imgTitle={"Excelência e Tradição"}
              firstText={"Excelência e Tradição"}
              secondText={"Tradição e excelência educacional são as expressões que definem a FECAP. São 110 anos de atuação na área de negócios com os melhores profissionais do mercado. No setor público, a FECAP também tem uma tradição de destaque, oferecendo pós-graduações há mais de 20 anos."}
            />
          </div>
          <div className="diferencial">
            <ContainerDiferencial
              img={fourthImg}
              imgTitle={"Benefícios aos Familiares"}
              firstText={"Benefícios aos Familiares"}
              secondText={"Familiares dos alunos da FECAP têm acesso a bolsas de estudo, a biblioteca, a palestras e a eventos culturais promovidos pela fundação."}
            />
          </div>
        </div>
      </div>
  )
}

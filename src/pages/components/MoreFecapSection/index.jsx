import React from 'react';

import fecapImg from '../../../assets/FECAP.jpg';
import fecap2Img from '../../../assets/FECAP-2.jpg';

import './styles.css';
import './responsive.css';


export default function MoreFecapSection(){
  return (
    <React.Fragment>
      <div className="more-fecap">
        <h2>Conheça mais sobre a FECAP</h2>
      </div>
      <div className="more-fecap">
        <div className="section">
          <div className="container-img">
            <img
              src={fecapImg}
              title="FECAP"
              alt="FECAP"
            />
          </div>
          <div className="container-text">
            <p>Com 116 anos de história, a Fundação Escola de Comércio Álvares Penteado (FECAP) é reconhecida como referência nacional em educação na área de negócios.</p>
            <p>A instituição proporciona formação de alta qualidade em todos os seus cursos, estando presente nas mais diferentes etapas do desenvolvimento profissional de um indivíduo – iniciando pelo ensino médio (tradicional, técnico e bilíngue) e passando pela oferta de cursos de graduação, Pós-Graduação, MBA, mestrado, extensão e cursos corporativos.</p>
          </div>
        </div>
      </div>

      <div className="more-fecap">
        <div className="section">
          <div className="container-text">
              <p>As atividades presenciais ocorrem na cidade de São Paulo, nos campi de Pinheiros, Largo São Francisco e Liberdade. A partir de 2018, a FECAP passou a também disponibilizar na versão online um dos seus programas de formação executiva mais concorridos, o de controladoria.</p>
              <p>Com vocação inclusiva e de desenvolvimento humano, a instituição se propõe a transformar a sociedade por meio do desenvolvimento de profissionais competentes e conscientes, colaborando de forma direta para um Brasil melhor.</p>
              <p>Em 2015, comprovou novamente a qualidade superior de seus cursos com os resultados do ENADE (Exame Nacional de Desempenho de Estudantes) e do IGC (Índice Geral de Cursos), no qual conquistou o primeiro lugar entre os Centros Universitários do Estado de São Paulo e, em âmbito nacional, considerando todos os tipos de instituição de ensino superior de todo o País, ficou entre as 5,5% instituições privadas mais bem classificadas.</p>
          </div>

          <div className="container-img">
            <img
              src={fecap2Img}
              title="FECAP"
              alt="FECAP"
            />
          </div>
        </div>
      </div>
    </React.Fragment>      
  )
}

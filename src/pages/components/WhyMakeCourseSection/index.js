import React, { useState, Fragment } from 'react';
import FAQList from '../FAQList';


import './styles.css';
import './responsive.css';


export default function WhyMakeCourseSection() {
  const answer1 = () => (
    <Fragment>
      <p><strong>Este curso destina-se a:</strong></p>
      <ul style={{textAlign: "left",}}>
        <li>Contábeis;</li>
        <li>Profissionais de áreas como Administração, Economia, Advocacia, Engenharia, etc;</li>
        <li>Profissionais no início e estágio médio de atividades administrativas e de contabilidade em empresas ou escritórios de contabilidade, área fiscal, controles internos e de auditoria interna;</li>
        <li>Profissional iniciante, recém graduado, ou em estágio médio da carreira com pretensões de assumir responsabilidades na área de auditoria ou controles internos, riscos, compliance;</li>
        <li>Profissionais em cargos iniciais de gestão e liderança, mas também com cargos operacionais como analistas júnior, pleno e sênior.</li>
      </ul>
    </Fragment>
  )

  const answer2 = () => (
    <Fragment>
      <p>O principal objetivo do curso é a capacitação de profissionais para uma atuação eficaz, eficiente e efetiva na realização dos trabalhos de auditoria interna e de gestão e operacionalização de controles internos.</p>

      <p>A abordagem do curso inclui a capacitação em processos de compliance, prevenção e combate a fraudes, corrupção e lavagem de dinheiro, Sarbanes-Oxley, reorganização societária, due diligence, governança, compliance na relação com governo e empresas privadas, controles internos de entes públicos, uso de recursos públicos e auditoria do terceiro setor.</p>
    </Fragment>
  )

  const answer3 = () => (
    <Fragment>
      <p>A grade curricular foi revisada e atualizada com disciplinas estruturadas e oferecidas em módulos para atender as demandas do mercado de trabalho e permitem a interdisciplinaridade dos conteúdos e além de promover, a ampliação da capacitação e do desenvolvimento das habilidades dos alunos com foco nos controles internos e na auditoria interna.</p>
      <ul style={{textAlign: "left",}}>

        <li>Planejamento, Execução e Controle em processos de Auditoria</li>
        <li>Auditoria Governamental</li>
        <li>Auditoria Interna Operacional</li>
        <li>Auditoria de Demonstrações Financeiras</li>
        <li>Controles Internos e SOX</li>
        <li>Auditoria no Terceiro Setor e de Uso de Recursos Públicos</li>
        <li>Riscos, Compliance, Lei Anticorrupção</li>
        <li>Prevenção de Fraudes e de Lavagem de Dinheiro</li>
        <li>Auditoria de Instituições Financeiras e Seguradoras</li>
        <li>Estatística e Amostragem Aplicadas à Auditoria</li>
        <li>Auditoria de TI e Sistema Integrado de Informações</li>
        <li>Auditoria em Reorganização Societária e Due Diligence</li>
        <li>Auditoria Tributária e de Obrigações Acessórias</li>
        <li>Disciplina Eletiva (TCC ou Soft Skills)</li>

      </ul>
    </Fragment>
  )

  const [list, setList] = useState([
    {
      question: 'Público-alvo',
      answer: answer1(),
      open: false
    },
    {
      question: 'Objetivo do curso',
      answer: answer2(),
      open: false
    },
    {
      question: 'Disciplinas',
      answer: answer3(),
      open: false
    }
  ])

  const toggleList = index => {
    setList(list.map((faq, i) => {

      if (i === index){
        faq.open = !faq.open
      }else {
        faq.open = false;
      }

      return faq;
    }))
  }

  return (
    <div className="container-why-make-course">
      {list.map((item, index) => {
        return (
          <FAQList
            key={index}
            faq={item}
            index={index}
            toggleFAQ={toggleList}
          />
        )
      })}
    </div>
  )
}

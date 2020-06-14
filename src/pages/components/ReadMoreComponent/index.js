import React, { useState } from 'react';

import './styles.css';
import './responsive.css';

export default function ReadMoreComponent() {

  const [moreOrLessVariable, setValueOfVariableState] = useState('invisible')
  const [moreOrLessText, setValueOfTextState] = useState('Ver mais ...')

  function toggleMoreVisible(){

    setValueOfTextState(
      moreOrLessText === 'Ver mais ...' 
      ? 'Ver menos ...'
      : 'Ver mais ...'
    )

    setValueOfVariableState(
      moreOrLessVariable === 'visible'
      ? 'invisible'
      : 'visible'
    )
  }

  return (
    <div className="read-more-container">
      <div className="container">
        <h2>O que você sabe sobre auditoria? Aprenda os temas centrais!</h2>
        <p>Iremos explicar para você alguns dos conceitos centrais de auditoria. Seu funcionamento, os órgãos responsáveis, os tipos de auditoria, os padrões internacionais utilizados no país, as leis. Tudo o que é essencial para conhecer mais sobre essa ferramenta de controle.</p>
      </div>

      <div className="container">
        <h2>Órgãos responsáveis</h2>
        <p>São órgãos auxiliares ao Poder Legislativo. Existem nos âmbitos federais, estaduais e municipais (nesse caso somente alguns municípios contam com um tribunal).</p>
        <p>TCU: O Tribunal de Contas da União (TCU) é um tribunal administrativo. É de sua responsabilidade julgar as contas de administradores públicos e os demais responsáveis por dinheiros, bens e valores públicos federais.</p>
        <p>É composto por nove ministros. Seis deles são de indicações feitas pelo Congresso Nacional, um escolhido pelo Presidente, e os outros dois escolhidos por auditores e membros do Ministério Público.</p>
        <p>TCE: Tribunal de Contas Estaduais, é responsável por analisar as contas das unidades da federação. Sua função é julgar as contas dos que administram o dinheiro público do Estado, além de emitir pareceres a respeito das contas apresentadas pelo governador.</p>
        <p>TCM: É o Tribunal de Contas do Município, órgão independente e autônomo que pertence à esfera municipal. Na Constituição de 1988 ficou decidido que não poderiam mais ser criados novos tribunais.</p>
        <p>Nas cidades de, São Paulo e Rio de Janeiro, foi autorizado manter os tribunais municipais que existiam, enquanto os outros municípios não puderam e não podem criar os seus próprios.</p>
      </div>

      <div className="container">
        <h2>Padrões Internacionais de Contabilidade Pública - IPSAS</h2>
        <p>As normas internacionais de contabilidade para o setor público são chamadas de IPSAS, sigla para International Public Sector Accounting Standards. Elas representam um conjunto de normas contábeis, para utilização, por entidades do setor público em todo o mundo na preparação das demonstrações financeiras.</p>
      </div>

      <div className={moreOrLessVariable}>
        <div className="container">
          <h2>As três partes</h2>
          <p>As auditorias do setor público envolvem pelo menos três partes distintas: o auditor, uma parte responsável e os usuários previstos.</p>
          <p>Auditor: o papel é desempenhado pelo titular das EFS (Entidades Fiscalizadoras Superiores) e pelas pessoas a quem é atribuída a tarefa de conduzir auditorias.</p>
          <p>Parte responsável: são os responsáveis da elaboração da informação sobre o objeto, da sua gestão e das recomendações acerca do objeto. Podem ser pessoas ou organizações.</p>
          <p>Usuários previstos: são as pessoas, organizações e grupos para quem o auditor elabora relatório de auditorias. Podem ser órgãos legislativos ou de controle, responsáveis pela governança ou o público em geral.</p>
        </div>

        <div className="container">
          <h2>Auditoria Governamental</h2>
          <p>É uma técnica que visa analisar se os atos administrativos estão correspondendo com os critérios preestabelecidos, seguindo procedimentos específicos. Divide-se em alguns tópicos, entre eles: Auditoria Financeira, Auditoria de Conformidade e Auditoria de Desempenho.</p>
        </div>

        <div className="container">
          <h2>Auditoria Financeira (ou Contábil)</h2>
          <p>Sua principal função é determinar se a informação financeira de uma entidade é apresentada em conformidade com a estrutura do relatório financeiro e o marco regulatório definido. Ou seja, o auditor reúne evidências suficientes e apropriadas que permitem expressar uma opinião sobre informações financeiras e verifica se não há irregularidades.</p>
        </div>

        <div className="container">
          <h2>Auditoria de Desempenho: Controles Internos</h2>
          <p>A auditoria de desempenho tem como função a verificação da legalidade de atos de natureza contábil, financeira, patrimonial e orçamentária praticada pelos órgãos e das entidades públicas.</p>
          <p>O controle interno é conhecido também como autocontrole, pois a própria Administração realiza a verificação e revisa os seus atos administrativos, focando nos princípios da legalidade, economicidade, eficiência e supremacia dos interesses públicos.</p>
        </div>

        <div className="container">
          <h2>Auditoria de Conformidade: Controles Externos</h2>
          <p>As auditorias de conformidade acontecem para avaliar se as atividades, transações financeiras e informações cumprem, em todos os aspectos, as normas que regem a entidade auditada. A legalidade é o foco principal da auditoria de conformidade.</p>
          <p>Os controles externos são definidos como um conjunto de ações de controle desenvolvidas por uma estrutura diferente, que tem procedimentos, atividades e recursos próprios que visa a fiscalização, verificação e correção de atos.</p>
          <p>As auditorias governamentais ainda podem ser executadas das seguintes maneiras:</p>
          <p>Direta: são executadas diretamente por servidores que trabalham nas unidades que fazem parte do Sistema de Controle Interno do Poder Executivo Federal.</p>
          <p>Centralizada: são desempenhadas exclusivamente por servidores em exercício nos órgãos centrais ou setoriais do Sistema de Controle Interno do Poder Executivo Federal.</p>
          <p>Descentralizada: são desempenhadas exclusivamente por servidores em exercício nas unidades regionais ou setoriais do Sistema de Controle Interno do Poder Executivo Federal.</p>
        </div>

        <div className="container">
          <h2>Administração Pública Federal ou entidades privadas.</h2>
          <p>Indireta: diz respeito às atividades de auditoria que são realizadas por servidores que não estão lotados em órgãos e unidades do Sistema de Controle Interno do Poder Executivo. Podem ser: compartilhada e terceirizada. Compartilhada é quando a coordenação é feita por órgãos do Sistema de Controle Interno do Poder Executivo Federal com o auxílio de instituições públicas ou privadas. Terceirizada acontece quando empresas privadas realizam os processos de auditoria.</p>
        </div>

        <div className="container">
          <h2>Lei de Acesso à Informação (LAI)</h2>
          <p>Regulamenta o direito constitucional de acesso às informações públicas. Essa norma entrou em vigor em 2012 e a partir da criação de mecanismos, possibilitou o recebimento de informações públicas dos órgãos e entidades a qualquer pessoa, física ou jurídica, sem necessidade de apresentar os motivos da solicitação.</p>
          <p>A lei vale para os três poderes da União, Estados, Distrito Federal e Municípios, inclusive aos Tribunais de Conta e Ministério Público. Além desses órgãos, as entidades privadas sem fins lucrativos também são obrigadas a fornecer as informações que referem-se aos recursos públicos recebidos.</p>
        </div>

        <div className="container">
          <h2>Lei de Responsabilidade Fiscal (LRF)</h2>
          <p>É um código de conduta para os administradores públicos de todo o país. A lei fixa limites para despesas com pessoal, para dívida pública e ainda determina a criação de metas para controlar as despesas e receitas.</p>
          <p>A LRF tem por objetivo melhorar a administração das contas públicas. Os governantes têm o compromisso com o orçamento e com as metas que devem ser apresentadas ao Poder Legislativo.</p>
          <p>Apresentamos alguns dos principais temas em auditoria pública! O processo de auditoria é de suma importância, visto que estamos falando sobre organizações públicas, fazer uma avaliação nas áreas de gestão desse setor é uma das formas de combater ilegalidades nos processos administrativos.</p>
          <p>Compreender o funcionamento da máquina pública é essencial para quem está se preparando para ingressar nesse setor, além de conhecer o funcionamento da auditoria pública conheça também quais são os processos envolvidos na controladoria pública!</p>
        </div>
      </div>
      <h3 onClick={toggleMoreVisible}>{ moreOrLessText }</h3>

    </div>
  )
}

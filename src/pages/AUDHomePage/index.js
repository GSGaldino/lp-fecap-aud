import React, { Fragment, Suspense } from 'react';

import Header from '../components/Header';
import GoalsSection from '../components/GoalsSection';
import WhyMakeCourseSection from '../components/WhyMakeCourseSection';
import ContainerDiferenciais from '../components/ContainerDiferenciais';
import FAQSection from '../components/FAQSection';
import MoreFecapSection from '../components/MoreFecapSection';
import WhatIsSection from '../components/WhatIsSection';
import ReadMoreComponent from '../components/ReadMoreComponent';
import Footer from '../components/Footer';

import './styles.css';
import './responsive.css';

const FormSection = React.lazy(() => import('../components/FormSection'));
const VideoIframe = React.lazy(() => import('../components/VideoIframe'));


export default function AUHomePage(){
  return (
    <Fragment>

      <Header />
      <Suspense fallback={<p>Carregando formulário ...</p>}>
        <FormSection />
      </Suspense>
      <GoalsSection />
      <WhyMakeCourseSection />

      <div className="container-action">
        <a href="#form">Mais informações</a>
      </div>

      <ContainerDiferenciais />
      <Suspense fallback={<p>Carregando vídeo ...</p>}>
        <VideoIframe />
      </Suspense>      
      <FAQSection />
      <MoreFecapSection />
      <WhatIsSection />
      <ReadMoreComponent />
      <Footer />

    </Fragment>
  )
}

import React, { Fragment } from 'react';

import Header from '../components/Header';
import FormSection from '../components/FormSection';
import GoalsSection from '../components/GoalsSection';
import WhyMakeCourseSection from '../components/WhyMakeCourseSection';
import ContainerDiferenciais from '../components/ContainerDiferenciais';
import VideoIframe from '../components/VideoIframe';
import FAQSection from '../components/FAQSection';
import MoreFecapSection from '../components/MoreFecapSection';
import WhatIsSection from '../components/WhatIsSection';
import ReadMoreComponent from '../components/ReadMoreComponent';
import Footer from '../components/Footer';

import './styles.css';
import './responsive.css';


export default function AUHomePage(){
  return (
    <Fragment>

      <Header />
      <FormSection />
      <GoalsSection />
      <WhyMakeCourseSection />

      <div className="container-action">
        <a href="#form">Mais informações</a>
      </div>

      <ContainerDiferenciais />
      <VideoIframe />
      <FAQSection />
      <MoreFecapSection />
      <WhatIsSection />
      <ReadMoreComponent />
      <Footer />

    </Fragment>
  )
}

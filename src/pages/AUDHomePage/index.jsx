import React from 'react';

import Header from '../components/Header';
import FormSection from '../components/FormSection';
import GoalsSection from '../components/GoalsSection';
import WhyMakeCourseSection from '../components/WhyMakeCourseSection';
import ActionButtonSection from '../components/ActionButtonSection';
import DiferenciaisContainer from '../components/DiferenciaisContainer';
import FAQSection from '../components/FAQSection';
import MoreFecapSection from '../components/MoreFecapSection';
import WhatIsContainer from '../components/WhatIsContainer';
import ReadMoreComponent from '../components/ReadMoreComponent';
import Footer from '../components/Footer';

import './styles.css';
import './responsive.css';


export default function AUHomePage(){
  const IframeSection = React.lazy(() => import('../components/IframeSection'));

  return (
    <div className="container-aud-homepage">
      <Header />
      <FormSection />
      <GoalsSection />
      <WhyMakeCourseSection />
      <ActionButtonSection />
      <DiferenciaisContainer />
      <React.Suspense fallback={() => <p>Carregando vídeo ..</p>}>
        <IframeSection />
      </React.Suspense>
      <FAQSection />
      <MoreFecapSection />
      <WhatIsContainer />
      <ReadMoreComponent />
      <Footer />
    </div>
  )
}

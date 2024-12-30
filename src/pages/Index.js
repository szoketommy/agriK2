import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigationsWhite3 from '../components/navigations-white/IndexSectionNavigationsWhite3';
import IndexSectionHeadersWhitePattern4 from '../components/headers-white-pattern/IndexSectionHeadersWhitePattern4';
import IndexSectionFeaturesWhitePattern2 from '../components/features-white-pattern/IndexSectionFeaturesWhitePattern2';
import IndexSectionApplicationsWhitePattern8 from '../components/applications-white-pattern/IndexSectionApplicationsWhitePattern8';
import IndexSectionHowItWorksWhitePattern5 from '../components/how-it-works-white-pattern/IndexSectionHowItWorksWhitePattern5';
import IndexSectionCtaWhitePattern11 from '../components/cta-white-pattern/IndexSectionCtaWhitePattern11';
import IndexSectionApplicationsWhitePattern9 from '../components/applications-white-pattern/IndexSectionApplicationsWhitePattern9';
import IndexSectionTestimonialsWhitePattern7 from '../components/testimonials-white-pattern/IndexSectionTestimonialsWhitePattern7';
import IndexSectionCtaWhitePattern12 from '../components/cta-white-pattern/IndexSectionCtaWhitePattern12';
import IndexSectionFootersWhitePattern13 from '../components/footers-white-pattern/IndexSectionFootersWhitePattern13';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigationsWhite3 />
      <IndexSectionHeadersWhitePattern4 />
      <IndexSectionFeaturesWhitePattern2 />
      <IndexSectionApplicationsWhitePattern8 />
      <IndexSectionHowItWorksWhitePattern5 />
      <IndexSectionCtaWhitePattern11 />
      <IndexSectionApplicationsWhitePattern9 />
      <IndexSectionTestimonialsWhitePattern7 />
      <IndexSectionCtaWhitePattern12 />
      <IndexSectionFootersWhitePattern13 />
    </React.Fragment>
  );
}


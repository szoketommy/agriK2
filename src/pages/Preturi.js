import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PreturiSectionPricingWhitePattern1 from '../components/pricing-white-pattern/PreturiSectionPricingWhitePattern1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Preturi() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <PreturiSectionPricingWhitePattern1 />
    </React.Fragment>
  );
}


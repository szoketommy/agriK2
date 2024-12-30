import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ResurseSectionRichTextWhitePattern1 from '../components/rich-text-white-pattern/ResurseSectionRichTextWhitePattern1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Resurse() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ResurseSectionRichTextWhitePattern1 />
    </React.Fragment>
  );
}


import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginSectionSignUpWhitePattern1 from '../components/sign-up-white-pattern/LoginSectionSignUpWhitePattern1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Login() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <LoginSectionSignUpWhitePattern1 />
    </React.Fragment>
  );
}


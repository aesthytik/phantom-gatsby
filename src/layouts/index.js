import React from 'react';

import Helmet from 'react-helmet';
import styled from 'styled-components';

import config from '../config/index';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexLayout = ({children}) => (
  <div id="wrapper">
    <Header />
    {children ()}
    <Footer />
  </div>
);

export default IndexLayout;

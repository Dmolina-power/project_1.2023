import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Page from '../components/Page';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </React.Fragment>
  );
}
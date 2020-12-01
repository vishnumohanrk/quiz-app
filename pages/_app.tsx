import '../styles/index.css';

import { AppProps } from 'next/app';

import MainLayout from '../layouts/MainLayout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default MyApp;

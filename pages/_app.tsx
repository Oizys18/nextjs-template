import Head from 'next/head';
import type { AppProps } from 'next/app';

/**
 * @description App
 * @date 2022. 9. 2. - 오후 5:10:29
 * @param {AppProps} { Component, pageProps }
 * @returns {*}
 */
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;

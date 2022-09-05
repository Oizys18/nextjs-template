import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme from '@theme';

/**
 * @description App
 * @date 2022. 9. 2. - 오후 5:10:29
 * @param {AppProps} { Component, pageProps }
 * @returns {*}
 */
function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Theme.GlobalStyle />
      <ThemeProvider theme={Theme.ThemeResource}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;

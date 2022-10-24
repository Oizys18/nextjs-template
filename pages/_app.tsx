import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme from '@theme';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

/**
 * @description App
 * @date 2022. 9. 2. - 오후 5:10:29
 * @param {AppProps} { Component, pageProps }
 * @returns {*}
 */
function App({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Theme.GlobalStyle />
          <ThemeProvider theme={Theme.ThemeResource}>
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;

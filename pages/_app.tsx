import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';

import Theme from '@theme';
import type { AppProps } from 'next/app';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
};

function App({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient(queryClientConfig);

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Theme.GlobalStyle />
        <ThemeProvider theme={Theme.ThemeResource}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

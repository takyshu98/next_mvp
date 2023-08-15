import type { AppProps } from 'next/app';

import { AppProvider } from '@/providers/app';

const App = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;

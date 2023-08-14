import type { AppProps } from 'next/app';
import './global.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
};

export default App;

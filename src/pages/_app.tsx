import type { AppProps } from 'next/app';
import './global.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { store } from '@/Presentation/Redux/store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
};

export default App;

import type { AppProps } from 'next/app';
import './global.css';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import * as Toast from '@radix-ui/react-toast';
import { store } from '@/Presentation/Redux/store';
import { Provider } from 'react-redux';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Theme>
        <Toast.Provider swipeDirection='right'>
          <Component {...pageProps} />
        </Toast.Provider>
      </Theme>
    </Provider>
  );
};

export default App;

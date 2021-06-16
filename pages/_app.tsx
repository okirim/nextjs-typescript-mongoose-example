import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import NotificationProvider from '../store/notifications/NotificationProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />
    </NotificationProvider>
  );
}

export default App

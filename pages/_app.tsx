import 'tailwindcss/tailwind.css'
import { AppProps } from 'next/app'
import NotificationProvider from '../src/store/notifications/NotificationProvider';
import ReactQuery from "../src/ReactQuery";
import {Provider} from "next-auth/client";

function App({ Component, pageProps }: AppProps) {
  return (
      <ReactQuery>
         <Provider session={pageProps.session}>
             <NotificationProvider>
                 <Component {...pageProps} />
             </NotificationProvider>
         </Provider>
      </ReactQuery>
  );
}

export default App

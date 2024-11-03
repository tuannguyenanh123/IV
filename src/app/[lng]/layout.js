import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import ToastContainerClient from 'src/components/Toast/ToastContainer';
import TopBar from 'src/components/TopBar';
import { languages } from '../i18n/settings';
import Provider from './Provider';

import '../../styles/app.css';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
// const TopBar = dynamic(() => import('src/components/TopBar'), { ssr: false });/
const Footer = dynamic(() => import('src/components/Footer'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tech',
  description: 'Tech',
};

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Provider>
          {/* <TopBar lng={lng} /> */}
          {children}
          <Footer lng={lng} />
          <ToastContainerClient />
        </Provider>
      </body>
    </html>
  );
}

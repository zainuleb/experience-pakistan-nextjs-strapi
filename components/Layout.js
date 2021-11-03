import styles from '@/styles/Layout.module.css';
import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import { useRouter } from 'next/dist/client/router';

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={title} content={description} />
        <meta name={keywords} content={keywords} />
      </Head>
      <Header />

      {router.pathname === '/' && <Showcase />}

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'Experience Pakistan',
  description: 'Find the vibrant and amazing festivals in Pakistan right now',
  keywords: 'Pakistan, festival, events, dj, music, culture',
};

export default Layout;

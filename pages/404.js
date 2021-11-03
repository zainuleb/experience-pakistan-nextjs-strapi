import Link from 'next/link';
import Layout from '@/components/Layout';
import { FaExclamationTriangle } from 'react-icons/fa';

import styles from '@/styles/404.module.css';

const NotFound = () => {
  return (
    <Layout title={'Error'}>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href="/">GO BACK Home</Link>
      </div>
    </Layout>
  );
};

export default NotFound;

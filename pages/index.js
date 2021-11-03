import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout.js';

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <p>This is Home</p>
      <Link href="/about">About</Link>
    </Layout>
  );
}

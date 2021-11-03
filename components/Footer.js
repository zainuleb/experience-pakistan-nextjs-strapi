import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyrights &copy; Pak Exp</p>
      <p>
        <Link href="/about">
          <a>About this Project</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

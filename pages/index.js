import Head from 'next/head';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Next App</h1>
      </main>
    </div>
  );
}

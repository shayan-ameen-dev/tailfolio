import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">Next App</h1>{' '}
      </main>
    </div>
  );
}

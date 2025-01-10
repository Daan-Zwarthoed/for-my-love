import Head from "next/head";
import React from "react";

const SIZE = 10;

const Home = () => {
  return (
    <>
      <Head>
        <title>For my love</title>
        <meta name="description" content="For my love" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-screen">
        <div className={`w-[${SIZE * 100}vw] h-[${SIZE * 100}vh] bg-red-600`}>
          hellos
        </div>
      </main>
    </>
  );
};

export default Home;

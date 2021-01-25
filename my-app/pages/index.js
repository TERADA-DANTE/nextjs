import Head from 'next/head';
import React from 'react';

export default function Home() {
  const API = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  function getData() {

  }
  return (
    <div>
      <Head>
        <title>HOME | TERADA</title>
      </Head>
      hello world
    </div>
  );
}

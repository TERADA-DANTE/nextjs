import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import {
  Divider, Header,
} from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

export default function Home({ list }) {
  return (
    <>

      <div>
        <Head>
          <title>HOME | TERADA</title>
          <meta name="description" content="My private nextjs tutorial" />
        </Head>
        <Header as="h3">Best Items</Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3">New Items</Header>
        <Divider />
        <ItemList list={list.slice(9, 18)} />
      </div>

    </>
  );
}

export async function getStaticProps() {
  const { API_URL } = process.env;
  const res = await axios.get(API_URL);
  const { data } = res;
  return {
    props: {
      list: data,
    },
  };
}

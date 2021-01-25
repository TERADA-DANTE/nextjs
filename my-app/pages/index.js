import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Divider, Header } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const API = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  function getData() {
    axios.get(API).then((res) => setList(res.data));
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | TERADA</title>
      </Head>
      <Header as="h3">Best items</Header>
      <Divider />
      <ItemList list={list} />

    </div>
  );
}

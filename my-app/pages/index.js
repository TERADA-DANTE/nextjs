import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Divider, Header, Loader } from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  function getData() {
    axios.get(API).then((res) => setList(res.data));
  }
  useEffect(() => {
    getData();
    setIsLoading(false);
    // setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )
        : (
          <div>
            <Head>
              <title>HOME | TERADA</title>
            </Head>
            <Header as="h3">Best Items</Header>
            <Divider />
            <ItemList list={list.slice(0, 9)} />
            <Header as="h3">New Items</Header>
            <Divider />
            <ItemList list={list.slice(9, 18)} />
          </div>
        )}
      )
    </>
  );
}

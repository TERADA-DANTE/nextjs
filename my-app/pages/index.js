import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Divider, Header, Dimmer, Loader, Image, Segment,
} from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_URL;
  function getData() {
    axios.get(API).then((res) => setList(res.data));
  }
  useEffect(() => {
    getData();

    setTimeout(() => setIsLoading(false), 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src="/images/wireframe/short-paragraph.png" />
        </Segment>
      )
        : (
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
        )}
      )
    </>
  );
}

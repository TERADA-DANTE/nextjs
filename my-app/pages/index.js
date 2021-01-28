import Head from 'next/head';
import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Divider, Header,
} from 'semantic-ui-react';
import ItemList from '../src/components/ItemList';

export default function Home() {
  const { NEXT_PUBLIC_NAME } = process.env;
  console.log(NEXT_PUBLIC_NAME);

  return (
    <>

      <div>
        w
      </div>

    </>
  );
}

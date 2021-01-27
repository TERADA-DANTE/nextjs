import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Item from '../../src/components/Item';

const Post = ({ item }) => {
  const router = useRouter();
  console.log(router.isFallback);
  // isFallback goes ture to false when load is over
  return (
    <>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      {item && <Item item={item} />}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  // You can use API in here
  return {
    paths: [
      { params: { id: '730' } },
      { params: { id: '740' } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params: { id } } = context;
  const apiURL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const { data } = await axios.get(apiURL);
  return {
    props: {
      item: data,
    },
  };
}

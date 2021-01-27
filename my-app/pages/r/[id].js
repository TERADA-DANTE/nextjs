import axios from 'axios';
import Head from 'next/head';
import Item from '../../src/components/Item';

const Post = ({ item }) => (
  <>
    <Head>
      <title>{item.name}</title>
      <meta name="description" content={item.description} />
    </Head>
    {item && <Item item={item} />}
  </>
);

export default Post;

export async function getStaticPaths() {
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

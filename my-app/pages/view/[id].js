import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/components/Item';

const Post = () => {
  const [item, setItem] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const API = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    axios.get(API).then((res) => setItem(res.data));
    setIsLoading(false);
  }
  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loader inline="centered" active>
          Loading
        </Loader>
      )
        : (!isLoading && <Item item={item} />)}
    </>
  );
};

export default Post;

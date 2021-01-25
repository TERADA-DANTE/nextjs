import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Post = () => {
  const [item, setItem] = useState('');
  const router = useRouter();
  const { id } = router.query;

  const API = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  function getData() {
    axios.get(API).then((res) => setItem(res.data));
  }
  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return (
    <p>
      Post:
      {' '}
      {id}
    </p>
  );
};

export default Post;

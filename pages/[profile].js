import Layout from '../layouts/Layout'
import { useRouter } from "next/router";

export default function profile() {
  const router = useRouter();
  console.log(router)
    return (
      <Layout>
        <p>Hello, my name is {router.query.profile || 'default'}. I use next.js</p>
      </Layout>
    );
  }
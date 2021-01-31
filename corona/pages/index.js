import styled from "styled-components";
import Header from "../src/components/Header";
import Nav from "../src/components/Nav";
import Hero from "../src/components/Hero";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Layout>
      <Header />
      <Nav />
      <Hero />
    </Layout>
  );
}

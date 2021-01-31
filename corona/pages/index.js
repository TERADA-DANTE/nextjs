import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 430px;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Home() {
  return (
    <Layout>
      <Header>
        <Button>
          <img width="20px" height="20px" src="icons/send.svg" alt="send" />
        </Button>
        <Logo>
          <img height="20px" src="icons/logo.svg" alt="logo" />
        </Logo>
        <Button>
          <img width="20px" height="20px" src="icons/menu.svg" alt="menu" />
        </Button>
      </Header>
    </Layout>
  );
}

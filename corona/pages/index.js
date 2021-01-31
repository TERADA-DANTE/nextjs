import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 430px;
  padding: 10px 20px;
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
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px auto 10px;
  box-shadow: rgb(0 0 0 / 12%) -1px 1px 20px;
  background: white;
  border-radius: 50px;
`;
const NavButton = styled.div`
  :hover {
    background: #e0e6fb;
  }
  span {
    margin-left: 4px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  border-radius: 50px;
  color: rgb(134, 134, 134);
  padding: 5px 12px;
  cursor: pointer;
`;

const Hero = styled.div`
  span {
    font-size: 11px;
    color: #464d52;
    opacity: 0.5;
    margin: 10px 0px 10px;
  }
  display: flex;
  flex-direction: column;
  justify-conent: center;
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
      <Nav>
        <NavButton>
          <img width="12px" height="12px" src="icons/japan.svg" alt="japan" />
          <span>国内</span>
        </NavButton>
        <NavButton>
          <img width="12px" height="12px" src="icons/world.svg" alt="world" />
          <span>世界</span>
        </NavButton>
      </Nav>
      <Hero>
        <span>{moment().format("MMMM Do YYYY, h:mm a")}</span>
      </Hero>
    </Layout>
  );
}

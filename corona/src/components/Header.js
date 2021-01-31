import styled from "styled-components";

const StyledHeader = styled.div`
  width: 430px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

const StyledLogo = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
export default function Header() {
  return (
    <StyledHeader>
      <StyledButton>
        <img width="20px" height="20px" src="icons/send.svg" alt="send" />
      </StyledButton>
      <StyledLogo>
        <img height="20px" src="icons/logo.svg" alt="logo" />
      </StyledLogo>
      <StyledButton>
        <img width="20px" height="20px" src="icons/menu.svg" alt="menu" />
      </StyledButton>
    </StyledHeader>
  );
}

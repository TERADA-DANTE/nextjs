import styled from "styled-components";

export default function Nav() {
  const StyledNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px auto 10px;
    box-shadow: rgb(0 0 0 / 12%) -1px 1px 20px;
    background: white;
    border-radius: 50px;
  `;
  const StyledNavButton = styled.div`
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
  return (
    <StyledNav>
      <StyledNavButton>
        <img width="12px" height="12px" src="icons/japan.svg" alt="japan" />
        <span>国内</span>
      </StyledNavButton>
      <StyledNavButton>
        <img width="12px" height="12px" src="icons/world.svg" alt="world" />
        <span>世界</span>
      </StyledNavButton>
    </StyledNav>
  );
}

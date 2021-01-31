import moment from "moment";
import styled from "styled-components";

export default function Hero() {
  const StyledHero = styled.div`
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
  return (
    <StyledHero>
      <span>{moment().format("MMMM Do YYYY, h:mm a")}</span>
    </StyledHero>
  );
}

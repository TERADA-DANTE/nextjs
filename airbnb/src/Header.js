import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { media } from "../lib/styleUtils";

// 상단 고정, 그림자
const Positioner = styled.div`
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  top: 0px;
  width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

// 해더의 내용
const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
  ${media.wide`
        width: 992px;
    `}

  ${media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: ${oc.black[8]};
  font-family: "Noto Sans", sans-serif;
`;

// 중간 여백
const Spacer = styled.div`
  flex-grow: 1;
`;

// 내비바 - 리스폰시브 - later
const Nav = styled.nav`
  display: flex;
  li {
    list-style: none;

    margin-left: 10px;
  }
  a {
    color: ${oc.gray[6]};
    text-decoration: none;
    font-weight: lighter;
  }
`;

export default function Header() {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo>design</Logo>
          <Spacer />
          <Nav>
            <li>
              <a href="/">Articles</a>
            </li>
            <li>
              <a href="/">Event</a>
            </li>
            <li>
              <a href="/">Videos</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
          </Nav>
        </HeaderContents>
      </WhiteBackground>
    </Positioner>
  );
}

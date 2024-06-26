import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import logo from "../images/logo192.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  img {
    height: 70px;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      list-style: none;
      margin-left: 20px;
      a {
        text-decoration: none;
        color: aqua;
      }
    }
  }
`;

const Header = () => {
  return (
    <Container style={{ maxWidth: 1300 }}>
      <HeaderWrapper>
        <img src={logo} alt="" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
        <Avatar alt="test" src="/static/images/avatar/3.jpg" />
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

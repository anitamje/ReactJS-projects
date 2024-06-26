import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import Button from "@mui/material/Button";

const HeaderWrapper = styled.div`
  max-width: 100%;
  min-height: 64px;
  border-radius: 50px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  /* position: fixed; */
  /* top: 20px; */
  margin-left: auto;
  margin-right: auto;
  .left-content {
    display: flex;
    align-items: center;
    img {
      height: 64px;
    }
    ul {
      display: flex;
      align-items: center;
      li {
        list-style: none;
        padding: 5px;
        border-radius: 15px;
        a {
          text-decoration: none;
          color: #000;
        }
      }
    }
  }

  .login {
  }
`;

const Header = () => {
  return (
    <Container style={{ maxWidth: 1300 }}>
      <HeaderWrapper>
        <div className="left-content">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link>Features</Link>
            </li>
            <li>
              <Link>Testimonials</Link>
            </li>
            <li>
              <Link>Highlights</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="login">
          <Button variant="outlined" component={Link} to="/login">
            sign in
          </Button>
          <Button variant="contained" component={Link} to="/register">
            sign up
          </Button>
        </div>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;

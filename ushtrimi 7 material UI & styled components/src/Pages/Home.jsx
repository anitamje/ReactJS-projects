import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import Card from "../Components/pages/Home/Card";

const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
`;

const Item = styled.div`
  width: 100%;
  p {
    color: blue;
    font-size: 25px;
    @media (max-width: 657px) {
      font-size: 20px;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Container style={{ maxWidth: 1300 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Item>
              <Card />
              <p>test</p>
              <p>test</p>
              <h1>Lorem ipsum dolor sit amet.</h1>
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <Card />
            </Item>
          </Grid>
          <Grid item xs={12} md={4}>
            <Item>
              <Card />
            </Item>
          </Grid>
          <Grid item xs={12} md={12}>
            <Item>
              <Card />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </HomeWrapper>
  );
};

export default Home;

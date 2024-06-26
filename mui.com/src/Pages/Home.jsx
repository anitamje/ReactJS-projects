import React from "react";
import styled from "@emotion/styled";
import { Container, Grid, TextField, Button } from "@mui/material";
import heroimg from "../Components/images/hero-light.png";

const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
`;

const Intro = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 60px;
    font-weight: 600;
    span {
      color: rgb(9, 89, 170);
    }
  }
  .text-field {
    display: flex;
    width: 100%;
    button {
      margin-left: 20px;
      width: 200px;
    }
  }
`;

const Hero = styled.div`
  margin: 80px 0px;
  img {
    max-width: 100%;
    min-height: 100%;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Container style={{ maxWidth: 1300 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Intro>
              <h1>
                Our latest <span>products</span>
              </h1>
              <p>
                Explore our cutting-edge dashboard, delivering high-quality
                solutions tailored to your needs. Elevate your experience with
                top-tier features and services.
              </p>
              <div className="text-field">
                <TextField
                  fullWidth
                  id="text"
                  label="Your email address"
                  variant="outlined"
                />
                <Button variant="contained">Start now</Button>
              </div>
              <p>
                By clicking "Start now" you agree to our Terms & Conditions.
              </p>
            </Intro>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Hero>
              <img src={heroimg} alt="" />
            </Hero>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid style={{ backgroundColor: "red" }} item xs={12} md={4}>
            grid1
          </Grid>
          <Grid style={{ backgroundColor: "black" }} item xs={12} md={4}>
            grid2
          </Grid>
          <Grid style={{ backgroundColor: "blue" }} item xs={12} md={4}>
            grid3
          </Grid>
          <Grid style={{ backgroundColor: "pink" }} item xs={12} md={12}>
            grid4
          </Grid>
        </Grid>
      </Container>
    </HomeWrapper>
  );
};

export default Home;

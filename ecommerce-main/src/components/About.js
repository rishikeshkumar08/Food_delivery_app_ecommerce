import { EastOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="assets/plate.png" />
      </ImageContainer>
      <InfoContainer>
        <SubTitle>ABOUT US</SubTitle>
        <Title>We Believe In Working With Accredited Chefs'</Title>
        <Desc>
          Good Foods And Cafe's Is A Family Run Company That Runs Best Food{" "}
          <br /> In The Market and Cafe's Selling Fresh And Tasty Foods, Which
          Is Even <br />
          Good For Your Health. We Use Premium Food Products Which Does <br />{" "}
          Not Harm Your Body.
        </Desc>
        <Button>
          See All{" "}
          <EastOutlined
            style={{
              background: "white",
              borderRadius: 50,
              padding: 1,
              color: "black",
              marginLeft: 10,
            }}
          />
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  min-height: 100vh;
  padding: 15px;

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ImageContainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 768px){
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-top: 3px;
`;

const Desc = styled.p`
  font-family: "Montserrat";
  font-size: 14px;
  color: gray;
  line-height: 35px;
  font-weight: 500;
`;

const SubTitle = styled.h4`
  font-family: "Montserrat";
  color: darkorange;
  font-size: 16px;
`;
const Image = styled.img`
  height: 450px;
  width: 450px;

  @media (max-width: 768px){
    height: 100%;
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: darkorange;
  border: none;
  border-radius: 30px;
  padding: 8px;
  display: flex;
  align-items: center;
  color: white;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  width: 130px;
  justify-content: flex-end;
  margin-top: 30px;
`;

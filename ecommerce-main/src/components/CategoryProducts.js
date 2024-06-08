import { EastOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductSlider from "./ProductSlider";


const CategoryProducts = () => {

  return (
    <>
    <Container>
      <InfoContainer>
        <Title>
          Browse Our <br />
          <span style={{ color: "darkorange" }}>Hottest</span> Categories
        </Title>
        <Link to={'products'} state={'Pizza'} style={{textDecoration: 'none'}}>
        <Button type="button" style={{cursor: "pointer"}}>
          See All{" "}
          <EastOutlined
            style={{
              background: "white",
              borderRadius: 50,
              padding: 2,
              color: "black",
              marginLeft: 10,
            }}
          />
        </Button>
        </Link>
      </InfoContainer>
      </Container>
      <ProductSlider/>
    </>
  );
};

export default CategoryProducts;



const Container = styled.div`
  margin: 0 20px;
  padding: 15px;
  position: relative;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;

  @media (max-width: 768px){
    font-size: 25px;
  }
`;

const Button = styled.button`
  background-color: darkorange;
  border: none;
  border-radius: 30px;
  padding-left: 30px;
  padding: 8px;
  display: flex;
  align-items: center;
  color: white;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  width: 130px;
  justify-content: flex-end;

  @media (max-width: 768px){
    padding-left: 20px;
    width: 120px;
  }
`;

import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import BestProductItems from "../components/BestProductItems";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductSlider from "../components/ProductSlider";

const Container = styled.div`
  background: #f9f9f9;
  padding-top: 12vh;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align:center;
`;

const SubTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 40px;
  text-align: center;
  color: darkorange;
`;

const Product = () => {
  const location = useLocation();
  const catType = location.state;

  return (
    <>
      <Navbar />
      <Container>
      <Title>
          Browse Our <br />
          <span style={{ color: "darkorange" }}>Products</span> 
        </Title>
        <ProductSlider/>
        <SubTitle>
          {catType}
        </SubTitle>
        <BestProductItems catType={catType}/>
      </Container>
      <Footer />
    </>
  );
};

export default Product;

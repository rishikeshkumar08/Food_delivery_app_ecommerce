import React from "react";
import styled from "styled-components";
import BestProductItems from "../components/BestProductItems";

const Container = styled.div`
  background-color: #f3f3f3;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0 60px;
  padding: 20px 0px;
`

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const ProductList = () => {
  return (
    <Container>
      <Wrapper>
      <Title>
          Best Selling <span style={{ color: "darkorange" }}>  Products</span>
        </Title>
      </Wrapper>
      <BestProductItems />
    </Container>
  );
};

export default ProductList;

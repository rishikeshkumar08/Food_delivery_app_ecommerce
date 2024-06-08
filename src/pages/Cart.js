import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";

const Container = styled.div`
  padding: 15vh 40px;
  background: #f8f6f3;
`;
const Wrapper = styled.div`margin: 0 60px`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align: center;
`;

const Cart = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>
          Shopping <span style={{ color: "darkorange" }}>Cart!</span>
        </Title>
        <Wrapper>
          <CartProduct />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;

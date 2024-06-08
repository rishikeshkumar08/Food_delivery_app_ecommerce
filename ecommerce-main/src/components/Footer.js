import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <One>
          <Title>Co. Logo</Title>
          <Desc></Desc>
          <Logos></Logos>
        </One>
        <Two>
          <Title>Categories</Title>
          <List>Main Course</List>
          <List>Pasta</List>
          <List>Burgers</List>
          <List>Pizza</List>
          <List>Desserts</List>
        </Two>
        <Three>
          <Title>Useful Links</Title>
          <List>Payment</List>
          <List>Privacy Policy</List>
          <List>Terms of Service</List>
          <List>My Account</List>
          <List>Return Policy</List>
        </Three>
        <Four>
          <Title>Newsletter</Title>
          <Desc></Desc>
          <Usermail>
            <Email />
          </Usermail>
          <Contact>
            <List></List>
            <List></List>
          </Contact>
        </Four>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  margin: 40px;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  background-color: #fdf5ec;
  border-radius: 30px;
  padding: 15px;
  overflow: hidden;
  &::after {
    background: url("assets/veg_bg1.png");
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    background-repeat: no-repeat;
    background-size: auto;
    background-position: bottom left;
    bottom: 22px;
    left: 2%;
  }
  &::before {
    background: url("assets/veg_bg2.png");
    background-repeat: no-repeat;
    background-position: top right;
    background-size: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 22px;
    content: "";
    right: 2%;
  }
`;
const One = styled.div`
  flex: 1;
  margin: 5px;
`;
const Two = styled.div`
  flex: 1;
  margin: 5px;
`;
const Three = styled.div`
  flex: 1;
  margin: 5px;
`;
const Four = styled.div`
  flex: 1;
  margin: 5px;
`;

const List = styled.li`
  list-style: none;
  color: gray;
  font-size: 16px;
  margin: 8px 0;
  font-family: "Montserrat";
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.2px;
`;
const Contact = styled.div``;
const Desc = styled.p``;
const Usermail = styled.div``;
const Email = styled.input``;
const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: 0.8px;
`;
const Logos = styled.div``;

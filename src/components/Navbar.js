import {
  LocationOnOutlined,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Navbar = () => {
  const state = useSelector((state) => state);
  const cart = state.carts.cartItems.length;
  const user = state.users?.users;
  
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <BrandLogo>My Logo</BrandLogo>
          </Link>
        </Left>
        <Centre>
          <LocationContainer>
            <Location>
              <H3F>Delivery to</H3F>
              <LocationOnOutlined />
            </Location>
            <SearchLocation>
              <Input placeholder="What are you looking for?" />
              <Search style={{ color: "gray" }} />
            </SearchLocation>
          </LocationContainer>
        </Centre>
        <Right>
          <Link to={'/products'} state={'Pizza'} style={{textDecoration: "none"}}><MenuItem>Menu</MenuItem></Link>
          {Object.keys(user).length!==0 ? ( <Link to={'/profile/orders'} style={{ textDecoration: "none", color: "black" }}><MenuItem>{user.name}</MenuItem></Link>) : 
          <Link to={'/signin'} style={{textDecoration: "none"}}><MenuItem>Sign In</MenuItem></Link>}
          <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              Cart{" "}
              <Badge badgeContent={cart} color="primary">
                <ShoppingBagOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;


const Container = styled.div`
  height: 80px;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  font-family: "Montserrat";
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px){
    justify-content: space-between;
  }
`;
const Left = styled.div`
  flex: 1;
`;
const Centre = styled.div`
  flex: 1;
  display: flex;
  align-item: centre;
  justify-content: center;
  @media (max-width: 768px){
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px){
    flex: 2;
  }
`;

const BrandLogo = styled.h1`
  font-weight: 600;
  font-family: "Montserrat";
  font-size: 20px;

  @media (max-width: 768px){
    font-size: 18px;
  }
`;

const LocationContainer = styled.div`
  display: flex;
`;

const Location = styled.span`
  display: flex;
  align-items: center;
`;

const SearchLocation = styled.div`
  padding: 0 10px;
  border-radius: 2px;
  display: flex;
  margin-left: 15px;
  height: 40px;
  align-items: center;
  flex: 1;
  background-color: #fafafa;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-family: "Montserrat";
  width: 180px;
  background-color: #fafafa;
`;

const H3F = styled.h3`
  font-size: 12px;
  color: gray;
  font-weight: 500;
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin: 15px;
  font-weight: 500;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;

  @media (max-width: 768px){
    margin: 10px;
  }
`;



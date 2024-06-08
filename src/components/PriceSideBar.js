import { CurrencyRupeeOutlined } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const PriceSideBar = ({ Total, pathName, button, handleButton }) => {
  const baseFare = 15;

  let shipping =
    Math.round((baseFare + (Total / 100) * 2) * Math.pow(10, 2)).toFixed(1) /
    Math.pow(10, 2).toFixed(2);
  let tax =
    Math.round((Total / 100) * 18 * Math.pow(10, 2)).toFixed(1) /
    Math.pow(10, 2).toFixed(2);

  let total = (
    Math.round(((Total + shipping + tax) * Math.pow(10, 2)).toFixed(1)) /
    Math.pow(10, 2)
  ).toFixed(2);


  const paymentMethod = useSelector((state) => state.order?.paymentMethod);

const location = useLocation();

const getPaymentButton = ()=>{
  if(location.pathname === '/order' && paymentMethod === "RAZORPAY"){
    return (<Button onClick={handleButton}><Image src="/assets/razorpay.svg"/></Button>);
  }
}

  

  return (
    <Container>
      <Wrapper>
        <Card>
          <Title>SUMMARY</Title>
          <ProductSec>
            <SubTotal>SUBTOTAL</SubTotal>
            <Price>
              <CurrencyRupeeOutlined style={{ fontSize: 18 }} />
              {Total}
            </Price>
          </ProductSec>

          <ProductSec>
            <SubTotal>SHIPPING FEE</SubTotal>
            <Price>
              <CurrencyRupeeOutlined style={{ fontSize: 18 }} />
              {shipping}
            </Price>
          </ProductSec>

          <ProductSec>
            <SubTotal>TAX</SubTotal>
            <Price>
              <CurrencyRupeeOutlined style={{ fontSize: 18 }} />
              {tax}
            </Price>
          </ProductSec>

          <hr style={{ opacity: 0.5 }} />

          <ProductSec style={{ background: "#eeeeee" }}>
            <SubTotal>TOTAL PRICE</SubTotal>
            <Price>
              <CurrencyRupeeOutlined style={{ fontSize: 18 }} />
              {total}
            </Price>
          </ProductSec>

          <ButtonContainer>

           { location.pathname === "/order" ? getPaymentButton():
            <Link
              to={pathName}
              style={{ textDecoration: "none" }}
            >
              <Button>{button}</Button>
            </Link>
          }
          </ButtonContainer>
        </Card>
        <Image src="assets/sideBar.png" />
      </Wrapper>
    </Container>
  );
};

export default PriceSideBar;

const Container = styled.div`
  position: relative;
`;

const Card = styled.div`
  padding: 10px;
  background: #fff;
`;
const Title = styled.h1`
  margin: 20px auto;

  &:after {
    display: block;
    content: "";
    position: absolute;
    width: 40%;
    height: 2.5px;
    background: #000;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const ProductSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;
const SubTotal = styled.p`
  color: gray;
  font-family: "Montserrat";
`;

const Price = styled.span`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 500;
`;

const Wrapper = styled.div``;

const ButtonContainer = styled.div`
  margin: 30px auto;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: darkorange;
  color: white;
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Montserrat";
  cursor: pointer;
`;

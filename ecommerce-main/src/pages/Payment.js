import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PriceSideBar from "../components/PriceSideBar";
import { useDispatch, useSelector } from "react-redux";
import { addPayment } from "../redux/actions/orders";

const Payment = () => {

  const dispatch = useDispatch();

  const selectPayment = (data) => {
    dispatch(addPayment(data.target.value))
  };
  const cart = useSelector((state) => state.carts?.cartItems);

  const total = cart.reduce((x, y) => x + y.price * y.qty, 0);

  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <PaymentMethods>
            <PaymentHeader>
              <Title>
                Select
                <span style={{ color: "darkorange" }}> Payment Option!</span>
              </Title>
            </PaymentHeader>

            <Card>
              <PaymentOptions>
                <Left>
                  <Input
                    type="radio"
                    name="payment"
                    value={"RAZORPAY"}
                    onClick={(e) => selectPayment(e)}
                  />
                  <Label>RAZORPAY</Label>
                </Left>
                <Right>
                  <ImageContainer>
                    <Image src="/assets/razorpay.svg" />
                  </ImageContainer>
                </Right>
              </PaymentOptions>
              <PaymentOptions>
                <Left>
                  <Input
                    type="radio"
                    name="payment"
                    value={"COD"}
                    onClick={(e) => selectPayment(e)}
                  />
                  <Label>CASH ON DELIVERY</Label>
                </Left>
                <Right>
                  <ImageContainer>
                    <Image src="/assets/cod.jpg" />
                  </ImageContainer>
                </Right>
              </PaymentOptions>
            </Card>
          </PaymentMethods>
          <PriceSideBar pathName={"/order"} button={"PROCEED"} Total={total} />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Payment;

const Container = styled.div`
  background: #fef4ea;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 60px;
`;
const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  width: 100%;
  gap: 10px;
`;
const PaymentHeader = styled.div``;
const PaymentMethods = styled.div`
  width: 100vw;
  margin: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const PaymentOptions = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  height: 60px;
  padding: 10px;
  align-items: center;
  border-radius: 5px 5px 0 0px;
  margin: 10px 0;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
  margin: 0;
`;

const Input = styled.input`
  margin: auto 2px;
`;
const Label = styled.label`
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 600;
  margin: 5px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div``;

const Image = styled.img`
  width: 80px;
  // height: 100%;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100px;
`;

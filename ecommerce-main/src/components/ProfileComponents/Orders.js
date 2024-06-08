import React from "react";
import styled from "styled-components";
import { Spinner } from "../skeleton/NotFound";
import { useSelector } from "react-redux";

const Orders = () => {
  const state = useSelector((state) => state.users.users);
  



  return (
    <Container>
      {state?.order.length===0 ? (
        <Spinner />
      ) : (
        <Wrapper>
          <Card>
            <Title>Farm Housa Pizza</Title>
            <Type>Large</Type>
            <Price>200</Price>
          </Card>
        </Wrapper>
      )}
    </Container>
  );
};

export default Orders;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Card = styled.div``;
const Title = styled.h2``;
const Type = styled.p``;
const Price = styled.p``;

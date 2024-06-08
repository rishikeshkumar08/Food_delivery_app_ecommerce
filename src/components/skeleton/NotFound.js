import React from "react";
import styled from "styled-components";

export const ErrorProd = ({ type, error }) => {
  const NotFound = () => (
    <Container>
      <Wrapper>
        <ErrorContainer>
          <Title>{error}</Title>
        </ErrorContainer>
        <ImageContainer>
          <Image src="/assets/error.png" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );

  const EmptyCart = () => (
    <Container>
      <Wrapper>
        <ErrorContainer>
          <Title>{error}</Title>
        </ErrorContainer>
        <ImageContainer>
          <Image src="/assets/cart.png" />
        </ImageContainer>
      </Wrapper>
    </Container>
  );

  return type === "notFound" ? <NotFound /> : <EmptyCart />;
};

export const Spinner = () => (
  <Container>
    <Wrapper>
      <ImageContainer>
        <Image src="/assets/spinner.gif" />
      </ImageContainer>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ErrorContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  color: darkorange;
  font-size: 40px;
`;

import React from 'react'
import styled from 'styled-components'


const Container = styled.div`display: flex;`;

const ImageContainer = styled.div`flex: 1`;
const InfoContainer = styled.div`flex: 1`;

const Title = styled.h1`font-family: 'Lora'; font-size: 16px; font-weight: 600; color: gray`
const Image = styled.img``;
const Desc = styled.p`font-size: 16px; font-family: 'Montserrat';`

const CategoryItems = ({Item}) => {
  return (
    <Container>
        <ImageContainer>
            <Image/>
        </ImageContainer>
        <InfoContainer>
            <Title>{Item.title}</Title>
            <Desc>{Item.desc}</Desc>
        </InfoContainer>
    </Container>
  )
}

export default CategoryItems
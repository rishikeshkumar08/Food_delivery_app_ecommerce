import styled from "@emotion/styled";
import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { SliderItems } from "../data";

const Slider = () => {
  const [ItemIndex, setItemIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setItemIndex(ItemIndex > 0 ? ItemIndex - 1 : 2);
    } else {
      setItemIndex(ItemIndex < 2 ? ItemIndex + 1 : 0);
    }
  };

  return (
    <div>
      <Container>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
          <EastOutlined />
        </Arrow>
        <Wrapper SliderIndex={ItemIndex}>
          {SliderItems.map((item) => (
            <Slide key={item.id}>
              <Infocontainer>
                <SubTitle>{item.desc}</SubTitle>
                <Title>{item.title}</Title>
                <Button>
                  Order Now{" "}
                  <EastOutlined
                    style={{
                      backgroundColor: "#fafafa",
                      color: "black",
                      borderRadius: 50,
                      padding: 2,
                      marginLeft: 10,
                    }}
                  />
                </Button>
              </Infocontainer>
              <Imagecontainer>
                <Image src={item.img} />
              </Imagecontainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <WestOutlined />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;



const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 60px
`;

const Arrow = styled.div`
  color: #000;
  background-color: #fafafa;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  z-index: 100;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.SliderIndex * -100}vw);
  transition: 0.5s ease-in-out;
`;

const Slide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.95)
    ),
    url("assets/bg.webp");

    @media (max-width: 768px){
      flex-direction: column;
    }
`;

const Infocontainer = styled.div`
  flex: 1;
  padding: 50px 0;
  margin-left: 8em;

  @media (max-width: 768px){
    flex-direction: column;
    padding: 10px 0;
    margin: auto 2em;
    order: 2;
  }
`;
const Imagecontainer = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
  align-items: center;
  padding: 50px;

  @media (max-width: 768px){
    width: 300px;
    height: 300px;
  }
`;
const SubTitle = styled.p`
  font-family: "Montserrat";
  color: darkorange;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 0;
`;
const Title = styled.h1`
  font-family: "Lora";
  font-weigth: 700;
  font-size: 70px;
  margin: 5px 0;

  @media (max-width: 768px){
    font-size: 30px;
  }
`;
const Button = styled.button`
  background-color: darkorange;
  border: none;
  outline: none;
  border-radius: 25px;
  padding: 8px;
  font-weight: 600;
  color: white;
  font-family: "Montserrat";
  align-items: center;
  display: flex;
  margin-top: 15px;
  padding-left: 30px;
`;

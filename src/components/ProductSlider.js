import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import { EastOutlined, WestOutlined } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
// import { productCategory } from "../data";


const ProductsSlider = styled.div`
  justify-content: space-around;
  align-items: center;
  display: flex;
`;
const Container = styled.div`
  margin: 0 60px;
  padding: 20px 0px;
  position: relative;
`;

const Button = styled.button`
  background-color: darkorange;
  border: none;
  border-radius: 30px;
  padding-left: 30px;
  padding: 8px;
  display: flex;
  align-items: center;
  color: white;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  width: 130px;
  justify-content: flex-end;
`;

const Wrapper = styled.div`
  padding: 30px 0px;
  display: flex;
  justify-content: space-between;
  transform: translateX(${(props) => props.Index * -20}%);
  transition: 0.5s ease;
`;

const SliderIcons = styled.span`
  background-color: darkorange;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  color: white;
  transition: .2s ease;
  opacity: 0;
  position: absolute;
  bottom: 22px;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
  `;

const Slider = styled.div`
  height: 220px;
  width: 18.2%;
  background: #${(props) => props.bg};
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 10px;
  flex-grow: 0;
  cursor: pointer;
  &:hover ${SliderIcons}{
    opacity: 1;
  }
`;

const SliderImage = styled.img`
  height: 100px;
  width: 100px;
`;
const SliderTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
`;

const Arrow = styled.div`
  color: #fafafa;
  background-color: darkorange;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: ${(props) => props.direction === "left" && "6%"};
  right: ${(props) => props.direction === "right" && "6%"};
  z-index: 200;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
`;

const Slide = styled.div`
  overflow: hidden;
`;

const Sliderdesc = styled.p`
  font-family: "Lora";
  font-weight: 400;
  font-size: 12px;
  color: gray;
  margin-top: 0;
`;

const ProductSlider = () => {
    const [ItemIndex, setItemIndex] = useState(0);
    const [productCategory, setProductCategory] = useState([]);

      useEffect(() => {
       const getCategory = async ()=>{
        try{
          const res = await axios.get('http://localhost:8000/api/category');
          // console.log(res)
          setProductCategory(res.data.success.data)
        }
        catch(err){
          console.log(err);
        }
       }
       getCategory();
      }, []);

    const handleClick = (direction) => {
      if (direction === "left") {
        setItemIndex(ItemIndex > 0 ? ItemIndex - 1 : 4);
      } else {
        setItemIndex(ItemIndex < 4 ? ItemIndex + 1 : 0);
      }

      
    };
  return (
    <Container>
    <ProductsSlider>
    <Arrow direction="left" onClick={() => handleClick("left")}>
      <WestOutlined />
    </Arrow>
    <Slide>
      <Wrapper Index={ItemIndex}>
        {productCategory.map((product) => (
          <Slider key={product._id} bg={product.bg}>
            <SliderImage src={product.img} />
            <SliderTitle>{product.title}</SliderTitle>
            <Sliderdesc>({product.totalCount} items)</Sliderdesc>
            <Link to={'/products'} state={product.title}>
            <SliderIcons>
              <EastOutlined />
            </SliderIcons>
            </Link>
          </Slider>
        ))}
      </Wrapper>
    </Slide>
    <Arrow direction="right" onClick={() => handleClick("right")}>
      <EastOutlined />
    </Arrow>
    
  </ProductsSlider>
  </Container>
  )
}

export default ProductSlider
import {
  Add,
  CurrencyRupeeOutlined,
  DeleteOutlined,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Badge } from '@mui/material'

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  // box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  flex: 1;
  flex-shrink: 0;
  flex-grow: 1;
  max-width: 230px;
`;

const CardTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 5px 0 2px 0;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
`;

const Wishlist = styled.span``;

const Discount = styled.span`
  color: white;
  background-color: darkorange;
  padding: 5px 8px;
  position: relative;
  left: -10px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  display: flex;
  align-items: center;
  background: transparent;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Type = styled.p`
  margin: 0;
  font-size: 12px;
  font-family: "Montserrat";
  font-weight: 500;
  color: gray;
`;
const Category = styled.p`
  margin: 8px 0;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 500;
  color: gray;
`;

const Price = styled.p`
  align-items: center;
  display: flex;
  margin: 10px 0;
  color: darkorange;
  font-weight: 600;
  font-family: "Montserrat";
`;

const CartQuan = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartToggle = styled.div`
  display: flex;
  border: 1px solid #f3f3f3;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const QuanCount = styled.input`
  border: none;
  outline: none;
  background-color: #f3f3f3;
  width: 15px;
  padding: 7px 10px;
  margin: auto;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  text-align: center;
`;

const Cart = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;


const BestProducts = (props)=> {

  const {_id, discount, price, title, type, category, img} = props.product;
  const qtys = (props.cart.cartItems.length!==0) ? props.cart.cartItems.filter(x => x._id === _id)[0] : 0;
  const qty = qtys ? qtys.qty : 0





  const wishlist = false;
  

  

  
  // console.log(qty);
  // console.log("best products", getState);

  // const dispatch = useDispatch();
  

    return (
            <ProductCard id={_id}>
              <CardTop>
                <Discount>-{discount}%</Discount>
                <Wishlist>
                  {wishlist ? (
                    <Favorite style={{ color: "red" }} />
                  ) : (
                    <FavoriteBorderOutlined />
                  )}
                </Wishlist>
              </CardTop>
              <ImageContainer>
                <Image src={img} />
              </ImageContainer>
              <Description>
                <Category>{category}</Category>
                <CardTitle>{title}</CardTitle>
                <Type>{type}</Type>
                <Price>
                  <CurrencyRupeeOutlined
                    style={{ alignItems: "center", fontSize: "medium" }}
                  />
                  {price}/-
                </Price>
              </Description>

              <CartQuan>
                <CartToggle>
                  {/* Remove Product From Cart */}
                
                {qty === 1 ?
                  <DeleteOutlined style={{
                    margin: "auto",
                    fontSize: "medium",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                  }} onClick={props.deleteItem} />
                  :
                    <Remove
                    style={{
                      margin: "auto",
                      fontSize: "medium",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 5,
                    }}
                    onClick={qty === 0 ? ()=>alert("Can't Remove") : props.removeQuantity}
                  />
                  
                  }
                  {/* Update the Quantity to the input  */}
                  <QuanCount
                    placeholder="0"
                    value={qty}
                    disabled
                  />

                  {/* add item to the cart  */}

                  <Add
                    style={{
                      margin: "auto",
                      fontSize: "medium",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 5,
                    }}
                    onClick={props.addQuantity}
                  />
                </CartToggle>
                <Cart>
                  <Button bg={qty!==0 ? "darkorange" : ""}>
                    <Badge badgeContent={qty} color={"success"}>
                    <ShoppingBagOutlined
                      style={{
                        padding: 4,
                        borderRadius: 50,
                        color: "white",
                        margin: "auto",
                        background: (qty!==0) ? "darkorange" : "#ececec"
                      }}
                    />
                    </Badge>
                  </Button>
                </Cart>
              </CartQuan>
            </ProductCard>
    );
  };
export default BestProducts;

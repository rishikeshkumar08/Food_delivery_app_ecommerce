import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PriceSideBar from "./PriceSideBar";
import {
  Add,
  CurrencyRupeeOutlined,
  DeleteOutline,
  Remove,
} from "@mui/icons-material";
import {
  addQuantity,
  deleteItem,
  remoeQuantity,
} from "../redux/actions/quantity";
import { ErrorProd } from "./skeleton/NotFound";

const CartProduct = () => {
  const getState = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const handleIncQuantity = (item) => {
    dispatch(addQuantity(item));
  };

  const handleDecQuantity = (item) => {
    dispatch(remoeQuantity(item));
  };
  const deleteItems = (item) => {
    dispatch(deleteItem(item));
  };


  let TotalPrice = 0;

  return (
    <Container>
      <ProductContainer>
        {getState.cartItems.length === 0 ? (
          <ErrorProd type={"emptyCart"} error={"Oops! your cart is empty."} />
        ) : (
          <SideBarContainer>
            <div>
              <CartHeading>
                <Left>
                  <HeadTitle>ITEM</HeadTitle>
                </Left>
                <Right>
                  <Quantity>
                    <HeadTitle>UNIT PRICE</HeadTitle>
                  </Quantity>
                  <HeadTitle>QUANTITY</HeadTitle>
                  <HeadTitle>FINAL PRICE</HeadTitle>
                  <HeadTitle>REMOVE</HeadTitle>
                </Right>
              </CartHeading>

              {getState.cartItems.map((item) => {
                TotalPrice += item.qty * item.price;
                return (
                  <Card key={item._id}>
                    <Left>
                      <ImageContainer>
                        <Image src={item.img} />
                      </ImageContainer>
                      <Description>
                        <Title>{item.title}</Title>
                        <Type>{item.type}</Type>
                      </Description>
                    </Left>

                    <Right>
                      <PriceContainer>
                        <CurrencyRupeeOutlined
                          style={{
                            fontSize: 16,
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 600,
                          }}
                        />
                        <Price>{item.price}</Price>
                      </PriceContainer>

                      <Quantity>
                        {item.qty === 1 ? (
                          <DeleteOutline
                            style={{
                              fontSize: "medium",
                              margin: "1",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 5,
                            }}
                            onClick={() => deleteItems(item)}
                          />
                        ) : (
                          <Remove
                            style={{
                              margin: "1",
                              fontSize: "medium",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 5,
                            }}
                            onClick={() => handleDecQuantity(item)}
                          />
                        )}
                        <InputField value={item.qty} disabled />
                        <Add
                          style={{
                            margin: "1",
                            fontSize: "medium",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 5,
                          }}
                          onClick={() => handleIncQuantity(item)}
                        />
                      </Quantity>

                      <PriceContainer>
                        <CurrencyRupeeOutlined
                          style={{
                            fontSize: "16",
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 600,
                          }}
                        />
                        <Price>{item.price * item.qty}</Price>
                      </PriceContainer>

                      <DeleteOutline
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 5,
                        }}
                        onClick={() => deleteItems(item)}
                      />
                    </Right>
                  </Card>
                );
              })}
            </div>

            <PriceSideBar Total={TotalPrice} pathName = {'/shipping'} button={"PROCEED TO CHECKOUT"}/>
          </SideBarContainer>
        )}
      </ProductContainer>
    </Container>
  );
};

export default CartProduct;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  padding: 2px 10px;
  width: 60vw;
`;
const Title = styled.h3`
  margin: 5px 0;
`;

const Type = styled.p`
  font-family: "Montserrat";
  color: gray;
  font-weight: 400;
  font-size: 15px;
  padding: 0;
  margin: 5px 0;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  height: 60px;
  width: 60px;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Price = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 15px;
`;

const ProductContainer = styled.div`
  flex: 2;
`;

const Description = styled.div`
  margin-left: 10px;
`;

const Left = styled.div`
  display: flex;
  flex: 2;
  padding: 5px;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 5px;
`;

const InputField = styled.input`
  border: none;
  outline: none;
  background-color: #f3f3f3;
  width: 15px;
  padding: 5px 8px;
  margin: auto;
  font-size: 15px;
  font-family: "Montserrat";
  font-weight: 500;
  text-align: center;
`;

const SideBarContainer = styled.div`
  display: flex;
`;

const CartHeading = styled.div`
  display: flex;
  margin: 5px 0;
  padding: 2px 15px;
  justify-content: space-between;
  align-items: center;
`;

const HeadTitle = styled.p`
color: gray;
font-family: 'Montserrat';
font-size: 10px;
font-weight: 500;
margin: 0;
`

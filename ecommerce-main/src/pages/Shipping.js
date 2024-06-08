import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PriceSideBar from "../components/PriceSideBar";
import { ErrorProd } from "../components/skeleton/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { getAddress, selectAddress } from "../redux/actions/userDetails";
import { NavLink, useNavigate } from "react-router-dom";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users?.users);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/signin");
    }
  }, [user, navigate]);

  useEffect(() => {
    dispatch(getAddress(user._id));
  });

  const getState = useSelector((state) => state.carts);
  let total = getState.cartItems.reduce((x, y) => x + y?.price * y?.qty, 0);
  const address = useSelector((state) => state.address?.address);
  const selectedAddress = useSelector(
    (state) => state.address?.selectedAddress
  );

  console.log(address);
  const handleSelect = (data) => {
    dispatch(selectAddress(data));
  };

  return (
    <>
      <Navbar />
      <MainContainer>
        <Title>
          Select <span style={{ color: "darkorange" }}>Shipping Address!</span>
        </Title>
        <Wrapper>
          <Container>
            <ProductContainer>
              {getState.cartItems.length === 0 ? (
                <ErrorProd
                  type={"emptyCart"}
                  error={"Oops! your cart is empty."}
                />
              ) : (
                <SideBarContainer>
                  {address.length === 0 ? (
                    <ErrorProd type={"notFound"} error={"No address found!"}/>
                  ) : (
                    <Card>
                      {address.map((item) => (
                        <Address
                          key={item._id}
                          style={
                            selectedAddress._id === item._id
                              ? { border: "2px solid darkorange" }
                              : {}
                          }
                          onClick={() => handleSelect(item)}
                        >
                          <Street>
                            <span style={{ color: "#000" }}>Street:</span>{" "}
                            {item.street}
                          </Street>
                          <Street>
                            <span style={{ color: "#000" }}>Building:</span>{" "}
                            {item.building}
                          </Street>
                          <Street>
                            <span style={{ color: "#000" }}>Area:</span>{" "}
                            {item.area}
                          </Street>
                          <Street>
                            <span style={{ color: "#000" }}>City:</span>{" "}
                            {item.city}
                          </Street>
                          <Street>
                            <span style={{ color: "#000" }}>Pin:</span>{" "}
                            {item.pin}
                          </Street>
                          <Street>
                            <span style={{ color: "#000" }}>State:</span>{" "}
                            {item.state}
                          </Street>
                        </Address>
                      ))}
                    </Card>
                  )}
                  <PriceSideBar Total={total} pathName={"/payment"} button={"PROCEED TO PAYMENT"} />
                </SideBarContainer>
              )}
              <ButtonContainer>
                <Button>
                  <NavLink
                    to={"/profile/address/add-address"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Add address
                  </NavLink>
                </Button>
              </ButtonContainer>
            </ProductContainer>
          </Container>
        </Wrapper>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Shipping;

const MainContainer = styled.div`
  padding: 15vh 40px;
  background: #f8f6f3;
`;
const Wrapper = styled.div`
  margin: 0 60px;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  justify-content: space-between;
  padding: 2px 10px;
`;
const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  text-align: center;
`;

const ProductContainer = styled.div`
  flex: 2;
`;

const SideBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Street = styled.p`
  margin: 5px;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 400;
  color: gray;
`;
const Address = styled.div`
  background: #fff;
  min-width: 60vw;
  padding: 10px;
  //   height: 30vh;
  margin: 10px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;
const Button = styled.button`
  color: #fff;
  background: darkorange;
  border: none;
  outline: none;
  padding: 10px 20px;
  width: 30%;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 500;
`;

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import PriceSideBar from "../components/PriceSideBar";
import { CurrencyRupeeOutlined } from "@mui/icons-material";
import { createOrder, placeOrder } from "../redux/actions/orders";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const user = useSelector((state) => state.users?.users);
  const cart = useSelector((state) => state.carts?.cartItems);
  const total = cart.reduce((x, y) => x + y.price * y.qty, 0);
  const selectedAddress = useSelector(
    (state) => state.address?.selectedAddress
  );
  const orderId = useSelector(state=>state.orderDetails?.orders?._id)
  const orderDetails = useSelector((state) => state.orderDetails?.orders);
  const paymentMethod = useSelector((state) => state.order?.paymentMethod);
  const dispatch = useDispatch();
  const baseFare = 15;
  let shipping =
    Math.round((baseFare + (total / 100) * 2) * Math.pow(10, 2)).toFixed(1) /
    Math.pow(10, 2).toFixed(2);
  let tax =
    Math.round((total / 100) * 18 * Math.pow(10, 2)).toFixed(1) /
    Math.pow(10, 2).toFixed(2);

    const navigate = useNavigate();
  // console.log(selectedAddress)

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const paymentSuccess = async (e) => {
    const { razorpay_payment_id } = e;

    dispatch(
      placeOrder({
        shipping: selectedAddress,
        price: total,
        tax: tax,
        delivery: shipping,
        item: cart,
        uId: user._id,
        paymentId: razorpay_payment_id,
        paymentMethod: paymentMethod,
      })
    );
    
  };

  useEffect(()=>{
    if(orderId){
      navigate(`/order/${orderId}`)
    }
  }, [orderId])

  useEffect(() => {
    if(Object.keys(user).length!==0 && Object.keys(cart).length!==0){

      if (!orderDetails) {
        dispatch(
          createOrder({
            selectedAddress: selectedAddress,
            price: total,
            tax: tax,
            delivery: shipping,
          })
        );
        console.log(orderDetails);
      }
    }
    else{
      navigate('/');
    }
  }, []);

  const handlePayment = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_bS3Zi5szu3Yesu", // Enter the Key ID generated from the Dashboard
      amount: orderDetails.amount.toString(),
      currency: orderDetails.currency,
      name: "Delicacy",
      description: "You are ordering the delicious items",
      // image: { logo },
      order_id: orderDetails.orderId,
      handler: function (res) {
        paymentSuccess(res);
      },
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: "9102367555",
      },
      notes: {
        street: selectedAddress.street,
        area: selectedAddress.area,
        city: selectedAddress.city,
        uId: selectedAddress.uId,
      },
      theme: {
        color: "#61dafb",
      },
    };

    // const {amount, id: order_id, currency} = result;

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Navbar />

      <Container>
        <Wrapper>
          <Orders>
            <OrderHeader>
              <Title>
                Order
                <span style={{ color: "darkorange" }}> Summary!</span>
              </Title>
            </OrderHeader>

            <Card>
              <OrderSummary>
                <SubTitle>Shipping Address</SubTitle>
                <AddressInfo>
                  <ProductInfo>
                    <Street>{selectedAddress.building}</Street>
                    <Street>{selectedAddress.street}</Street>
                    <Street>{selectedAddress.area}</Street>
                    <Street>{selectedAddress.city}</Street>
                    <Street>{selectedAddress.pin}</Street>
                    <Street>{selectedAddress.state}</Street>
                  </ProductInfo>
                </AddressInfo>
              </OrderSummary>

              <OrderSummary>
                <SubTitle>Items</SubTitle>
                {cart.map((item) => (
                  <AddressInfo>
                    <ProductImage>
                      <Image src={item.img} />
                    </ProductImage>
                    <ProductInfo>
                      <Street style={{ fontSize: 18 }}>{item.title}</Street>
                      <Street>{item.category}</Street>
                      <Street style={{ display: "flex", alignItems: "center" }}>
                        <CurrencyRupeeOutlined style={{ fontSize: 16 }} />{" "}
                        {item.price}/-
                      </Street>
                      <Street>{item.qty}</Street>
                      <Street>{item.type}</Street>
                    </ProductInfo>
                  </AddressInfo>
                ))}
              </OrderSummary>

              <OrderSummary>
                <SubTitle>Payment Method</SubTitle>
                <AddressInfo>
                  <ProductInfo>
                    <Input type="radio" checked disabled />
                  </ProductInfo>
                  <Street>{paymentMethod}</Street>
                </AddressInfo>
              </OrderSummary>
            </Card>
          </Orders>
          <PriceSideBar
            pathName={"/order"}
            button={"PAY"}
            Total={total}
            handleButton={() => handlePayment()}
          />
        </Wrapper>
      </Container>

      <Footer />
    </>
  );
};

export default Order;

const Container = styled.div`
  background: #fef4ea;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  margin-top: 10px;
`;
const Wrapper = styled.div`
  padding: 30px 0;
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  height: 100%;
`;
const OrderHeader = styled.div``;
const Orders = styled.div`
  width: 100vw;
  margin: 10px;
  height: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 10px;
  margin: 15px 0;
`;

const OrderSummary = styled.div`
  padding: 10px;
  align-items: center;
  width: 60%;
  margin: 10px;
  background: #fff;
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

const SubTitle = styled.h3`
  font-family: "Montserrat";
  font-size: 18px;
`;

const AddressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fef4ea;
  align-items: center;
  margin: 5px 0;
  width: 100%;
`;
const Street = styled.p`
  margin: 8px;
  font-family: "Montserrat";
  font-weight: 500;
  color: gray;
  font-size: 15px;
`;

const ProductImage = styled.div`
  flex: 1;
`;
const ProductInfo = styled.div`
  flex: 1;
`;

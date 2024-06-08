import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorProd, Spinner } from "../skeleton/NotFound";
import { getAddress, selectAddress } from "../../redux/actions/userDetails";

const Address = () => {
  const user = useSelector((state) => state.users.users);
  const state = useSelector((state) => state.address);
  const selectedAddress = useSelector(state=>state.address.selectedAddress);
  console.log(state);
  const dispatch = useDispatch();
    useEffect(() => {
      if (user){
        dispatch(getAddress(user._id))
      }
    });

    const handleSelected = (e)=>{
      dispatch(selectAddress(e))
      // console.log(e)
    }

  return (
    <Container>
      <Wrapper>
        <Card>
          {state.loading ? <Spinner /> : state.address.length === 0 ? (
            <ErrorProd type={"notFound"} error={"No address found"}/>
          ) : (<>
              <Title>SAVED
            <span style={{ color: "darkorange" }}> ADDRESS</span> </Title>
                <AddressCard>
              {
               state.address.map((i) => {
                return(
                <AddressContainer id={i._id} style={selectedAddress._id === i._id ? {border: "2px solid darkorange"} : {}} onClick={()=>handleSelected(i)}>
                  <Street>{i.street}</Street>
                  <Street>{i.building}</Street>
                  <Street>{i.area}</Street>
                  <Street>{i.city}</Street>
                  <Street>{i.pin}</Street>
                  <Street>{i.state}</Street>
                  <ButtonContainer>
                    <Button>Add</Button>
                    <Button>Remove</Button>
                  </ButtonContainer>
                </AddressContainer>
              )})}
            </AddressCard></>
          )}
          <ButtonContainer>
            <Button>
              <NavLink
                to={"add-address"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Add address
              </NavLink>
            </Button>
          </ButtonContainer>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Address;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Card = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  gap: 10px;
`;
const Button = styled.button`
  color: #fff;
  background: darkorange;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-family: "Montserrat";
  font-size: 16px;
  width: 100%;
  font-weight: 500;
`;

const AddressContainer = styled.div`
  min-width: 250px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,.1);
  cursor: pointer;
`;
const Street = styled.p`
  font-size: 15px;
  font-family: "Montserrat";
  color: gray;
  margin: 5px;
`;

const AddressCard = styled.div`
  display: flex;
  padding: 10px;
  gap: 30px;
  justify-content: flex-start;
  margin-top: 15px;
  flex-wrap: wrap;
`;

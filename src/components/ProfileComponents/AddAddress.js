import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addAddress } from "../../redux/actions/userDetails";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector(state=>state.users.users);
  const navigate = useNavigate();


  const onSubmit = (data) => {
    dispatch(addAddress({...data, uId: user._id}));
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <TopHeader>
            <ArrowBack onClick={()=>navigate(-1)}  style={{fontSize: 40, marginRight: 15, cursor: "pointer"}}/>
            <Title>Add A
            <span style={{ color: "darkorange" }}> NEW ADDRESS</span> </Title>
          </TopHeader>
          <FormConatiner>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputContainer>
                <Label>Street name:-</Label>
                <Input placeholder="Street name/locality/colonyname" {...register("street")} type="text"/>
              </InputContainer>
              <InputContainer>
                <Label>Building name:-</Label>
                <Input placeholder="Building name/house name/ house number" {...register("building")} type="text"/>
              </InputContainer>
              <InputContainer>
                <Label>Area:-</Label>
                <Input placeholder="Area name" {...register("area")} type="text"/>
              </InputContainer>
              <InputContainer>
                <Label>City:-</Label>
                <Input placeholder="City name" {...register("city")} type="text"/>
              </InputContainer>
              <InputContainer>
                <Label>Pin:-</Label>
                <Input placeholder="Area pin code" {...register("pin", {maxLength: 6})} type="number"/>
              </InputContainer>
              <InputContainer>
                <Label>State:-</Label>
                <Input placeholder="State" {...register("state")} type="text"/>
              </InputContainer>
              <ButtonContainer>
                <Button type="submit">ADD</Button>
              </ButtonContainer>
            </Form>
          </FormConatiner>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default AddAddress;

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
  background: #fff;
`;
const FormConatiner = styled.div`
  height: 100%;
  margin: 10% 0;
  padding: 0 20px;
  margin-right: 20px;
`;
const Form = styled.form``;
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  align-items: center;
  margin: 15px;
`;
const Label = styled.label`
  width: 100%;
  flex: 1;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 16px;
  color: gray;
`;
const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid orange;
  flex: 2;
  transition: 0.2s ease;
  padding: 5px;
  margin: 5px;
  font-weight: 400;
  font-family: "Montserrat";
  font-size: 15px;

  &:focus {
    transition: 0.2s ease;
    border-bottom: 2px solid darkorange;
  }
  &::placeholder{
    opacity: .6;
  }
`;
const Title = styled.h2`
  margin: 0;
  font-size: 40px;
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
  cursor: pointer
`;

const TopHeader = styled.div`display: flex; align-items: center;`

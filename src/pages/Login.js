import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserLogin } from "../redux/actions/userAuth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const dispatch = useDispatch();
  const getState = useSelector((state) => state.users);
  const user = getState?.users;
  const navigate = useNavigate();

  useEffect(()=>{
    if(getState.message!=='')
      toast(getState.message);

    if(Object.keys(user).length!==0){
      navigate('/')
    }
  },[getState, user])

  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(UserLogin(data));
  };

  return (
    <Container>
      <Wrapper>
        <Card>
          <Left>
            <ImageContainer>
              <Image src="assets/login.png" />
            </ImageContainer>
          </Left>

          <Right>
            <Title>Login</Title>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputContainer>
                <Label>Email:</Label>
                <Input
                  placeholder="Email"
                  {...register("email", { required: true })}
                  type="email"
                />
                {errors?.email?.message && <p>{errors?.email?.message}</p>}
              </InputContainer>

              <InputContainer>
                <Label>Password:</Label>
                <Input
                  placeholder="Password"
                  {...register("password", { required: true })}
                  type="password"
                />
                {errors?.password?.message && (
                  <p>{errors?.password?.message}</p>
                )}
              </InputContainer>

              <ButtonContainer>
                <Button type="submit">Login</Button>
              </ButtonContainer>
            </Form>

            <ButtonContainer>
              <Link to={"/signup"}>
                <RegisterLink>Don't have account? click here</RegisterLink>
              </Link>
            </ButtonContainer>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
          </Right>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("assets/bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 10;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 11;
  }
`;
const Wrapper = styled.div`
  z-index: 1000;
`;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fefefe;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  min-height: 450px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px;
  background: #fff;
  border-radius: 5px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: #f3f3f3;
  height: 30px;
  padding: 5px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  padding: 10px auto;
  width: 100%;
`;

const Title = styled.h2`
  margin: 5px;
`;

const Label = styled.label`
  font-family: "Montserrat";
  font-size: 14px;
  color: gray;
  margin: 5px 0;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  margin: 15px auto;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: darkorange;
  color: #fff;
  padding: 6px 2px;
  width: 25%;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  border-radius: 2px;
`;
const Form = styled.form`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const RegisterLink = styled.p`
  color: blue;
  text-decoration: underline;
  font-family: "Montserrat";
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

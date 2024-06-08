import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOders } from '../redux/actions/orders'

const Orders = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    console.log()
    useEffect(()=>{
        dispatch(getOders(location.pathname.split("/")[2]))
    },[])
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>

        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Orders;


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
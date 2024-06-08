import React, { useEffect } from "react";
import styled from "styled-components";
import BestProducts from "./BestProducts";
import {getProducts, getProductsById} from '../redux/actions/index'
import {addQuantity, deleteItem, remoeQuantity} from '../redux/actions/quantity'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {ErrorProd} from "./skeleton/NotFound";
import {Skeleton} from "./skeleton/Skeleton";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-evenly;
  margin: 30px 80px;
`;

const BestProductItems = ({catType})=> {

  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products);

  const {loading} = products;

  const cartItems = useSelector((state)=>state.carts);

  const location = useLocation();
  // console.log(location);


  useEffect(() => {
    if (location.pathname === '/products') {
      dispatch(getProductsById(catType));
    } else if (location.pathname === '/') {
      dispatch(getProducts());
    }
   }, [dispatch, location.pathname, cartItems, catType]);

  //  useEffect(()=>{
  //   dispatch(getProducts())
  //  }, [cartItems])


   const handleIncQuantity = (item)=>{
      dispatch(addQuantity(item))
   }
   const handleDecQuantity = (item)=>{
      dispatch(remoeQuantity(item))
   }
   const deleteItems = (item)=>{
      dispatch(deleteItem(item))
   }


    return (
      <Container>
        <Wrapper>
          { (loading) ? <Skeleton /> : products.data.length===0 ? <ErrorProd error={products.error} type={"notFound"}/> :
            products.data.map((item) => {
              return (
                <BestProducts product = {item} key = {item._id}  addQuantity={()=>handleIncQuantity(item)} cart={cartItems} removeQuantity={()=>handleDecQuantity(item)} deleteItem={()=>deleteItems(item)}/>
              );
            })
          }
        </Wrapper>
      </Container>

    );
}

export default BestProductItems;

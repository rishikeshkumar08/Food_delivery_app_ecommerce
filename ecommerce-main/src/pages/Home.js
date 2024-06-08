import React from 'react'
import About from '../components/About'
import Category from '../components/Category'
import CategoryProducts from '../components/CategoryProducts'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import ProductList from './ProductList'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Category/>
    <CategoryProducts/>
    <About/>
    <ProductList />
    <Footer/>
    </>
  )
}

export default Home
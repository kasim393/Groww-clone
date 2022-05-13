import React from "react";
import Article from "../../components/article/Article";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Press from "../../components/press/Press";
import Product from "../../components/product/Product";
import Showcase from "../../components/showcase/Showcase";
import Test from "../../components/test/Test";
import Trust from "../../components/trust/Trust";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Product />
      <Showcase />
      {/*<Trust />*/}
      <Article />
      <Press />
      <Test />
      <Footer />
    </>
  );
};

export default Home;

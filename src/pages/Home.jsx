import React from "react";
import Navbar from "../components/modules/HomePage/Navbar/Navbar";
import Carousel from "../components/modules/HomePage/Carousel/Carousel";
import Category from "../components/modules/HomePage/Category/Category";
import Product from "../components/modules/HomePage/Product/Product";
import Popular from "../components/modules/HomePage/Popular/Popular";


const Home = () => {
  return (
    <div className="container ">
      <Navbar />
      <Carousel />
      <Category />
      <Product />
      <Popular />
    </div>
  );
};

export default Home;

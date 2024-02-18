import React from "react";
import Slide from "../components/Slide";
import Categories from "../components/Categories";
import ProductContainer from "./../components/ProductContainer";
import { useGetProductsQuery } from "../services/rtkquery";


const MainPage = () => {
  // const {data, isError, isLoading }= useGetProductsQuery();

  return (
    <>
      <Slide />
      <div className="main">
        <Categories />
        <ProductContainer />
      </div>
    </>
  );
};

export default MainPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosInstance";
import ProductsContainer from "../ProductsContainer";

const ProductsComponent = () => {
  // const data = useLoaderData();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //   const getData = async () => {
  //     const response = await fetch(`https://fakestoreapi.com/products`);
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  const getData = async () => {
    setIsLoading(true);
    const response = await axiosInstance.get(`/products`);
    setIsLoading(false);
    setProducts(response.data);

    // try {
    //   setIsLoading(true);
    //   const response = await axiosInstance.get(`/products`);
    //   setProducts(response.data);
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  return <ProductsContainer products={products} isLoading={isLoading} />;
};

export default ProductsComponent;

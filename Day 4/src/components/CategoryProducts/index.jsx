import React, { useEffect, useState, useContext } from "react";
import axiosInstance from "../../axiosConfig/axiosInstance";
import { Spinner } from "react-bootstrap";
import ProductsContainer from "../ProductsContainer";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CategoryContext } from "../../contexts/CategoryContext";

const CategoryProducts = () => {
  const { selectedCategory } = useContext(CategoryContext);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getData = async (category) => {
    setIsLoading(true);
    const response = await axiosInstance.get(`/products/category/${category}`);
    setProducts(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData(selectedCategory);
  }, [selectedCategory]);

  return <ProductsContainer products={products} isLoading={isLoading} />;
};

export default CategoryProducts;

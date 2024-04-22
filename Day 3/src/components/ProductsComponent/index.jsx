import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Button, Card } from "react-bootstrap";
import styles from "./products.module.css";
import axiosInstance from "../../axiosConfig/axiosInstance";
import ProductCard from "../ProductCard";

const ProductsComponent = () => {
  // const data = useLoaderData();
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);

  //   const getData = async () => {
  //     const response = await fetch(`https://fakestoreapi.com/products`);
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  const getData = async () => {
    const response = await axiosInstance.get(`/products`);
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {!products ? (
        <div className="d-flex p-6 justify-content-center align-items-center h-100 w-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductsComponent;

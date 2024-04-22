import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import { Spinner } from "react-bootstrap";
import axiosInstance from "../../axiosConfig/axiosInstance";

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  const getData = async (id) => {
    const response = await axiosInstance.get(`/products/${id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getData(productID);
  }, [productID]);

  return !product ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div style={{ width: "14rem" }}>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetails;

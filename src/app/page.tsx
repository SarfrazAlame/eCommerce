"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface ProductType {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function Home() {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/products");
      const response = data.data.products;
      setProduct(response);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {product.map((item: ProductType) => {
        return <div key={item.id}>{item.category}</div>;
      })}
    </div>
  );
}
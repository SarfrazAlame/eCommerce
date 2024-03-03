"use client";

import { useEffect } from "react";

export default function Home() {
  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      console.log(data);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div></div>;
}

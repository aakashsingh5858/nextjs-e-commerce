"use client";
import { useEffect, useState } from "react";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Wrapper from "./components/Wrapper";
import { getAllProducts } from "./api/api";
import Loader from "./components/loader/Loader";
import ProductList from "./components/ProductList";

export default function Home() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getAllProductsData();
  }, []);

  const getAllProductsData = () => {
    setLoading(true);
    getAllProducts().then((res) => {
      if (res?.status && res.status === 200) {
        setProductsData(res?.data);
      }
      setLoading(false);
    });
  };

  return (
    <main className="">
      <HeroBanner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] ">
          <div className="text-[2.5rem] text-yellow-300 md:text-[3.5rem] mb-5 font-normal  pb-2 leading-tight">
            Our{" "}
            <span className="text-indigo-950 border-b-4 border-indigo-950">
              Products
            </span>
          </div>
        </div>
        <ProductList data={productsData} isLoading={isLoading} />
      </Wrapper>
    </main>
  );
}

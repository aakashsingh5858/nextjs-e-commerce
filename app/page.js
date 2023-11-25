"use client";
import { useEffect, useState } from "react";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ProductCard from "./components/ProductCard/ProductCard";
import Wrapper from "./components/Wrapper";
import { getAllProducts } from "./api/api";

export default function Home() {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getAllProductsData();
  }, []);
  const getAllProductsData = () => {
    getAllProducts().then((res) => {
      if (res.status && res.status === 200) {
        setProductsData(res?.data);
      }
    });
  };
  // console.log(productsData, "productsData");
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {productsData?.map((data, i) => {
            return (
              <div key={i}>
                <ProductCard product={data} />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </main>
  );
}

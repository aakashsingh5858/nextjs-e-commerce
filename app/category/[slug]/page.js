"use client";
import React, { useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { useParams } from "next/navigation";
import { getCategories } from "@/app/api/api";

const Category = () => {
  const { slug } = useParams();

  useEffect(() => {
    getCategoriesData();
  }, [slug]);
  const getCategoriesData = () => {
    console.log(slug);
    getCategories(slug).then((res) => {
      console.log(res, "/////cat");
    });
  };
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[2.5rem]  md:text-[3.5rem] mb-5 font-normal capitalize  pb-2 leading-tight">
            <span className="text-indigo-950 border-b-4 border-indigo-950">
              jordan
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {/* {productsData?.map((data, i) => {
            return (
              <div key={i}> */}
          {/* <ProductCard product={[]} /> */}
        </div>
        {/* );
          })}
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Category;

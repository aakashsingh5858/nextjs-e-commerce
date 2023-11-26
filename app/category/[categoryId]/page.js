"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import { useParams } from "next/navigation";
import { getProductByCategory } from "@/app/api/api";
import Loader from "@/app/components/loader/Loader";

const Category = () => {
  const { categoryId } = useParams();
  const [productData, setProductData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getCategoriesData();
  }, [categoryId]);
  const getCategoriesData = () => {
    setLoading(true);
    getProductByCategory(categoryId).then((res) => {
      if (res.status && res.status === 200) {
        setProductData(res?.data);
        setLoading(false);
      }
    });
  };
  return (
    <div className="w-full md:py-20">
      {isLoading && <Loader />}
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[2.5rem]  md:text-[2.5rem] mb-5 font-normal capitalize  pb-2 leading-tight">
            <span className="text-indigo-950 border-b-4 border-indigo-950">
              {categoryId}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {productData?.map((data, i) => {
            return (
              <div key={i}>
                <ProductCard product={data} />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

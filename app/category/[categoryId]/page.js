"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { useParams } from "next/navigation";
import { getProductByCategory } from "@/app/api/api";
import ProductList from "@/app/components/ProductList";

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
      }
      setLoading(false);
    });
  };
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[2.5rem]  md:text-[2.5rem] mb-5 font-normal capitalize  pb-2 leading-tight">
            <span className="text-indigo-950 border-b-4 border-indigo-950">
              {decodeURIComponent(categoryId)}
            </span>
          </div>
        </div>
        <ProductList data={productData} isLoading={isLoading} />
      </Wrapper>
    </div>
  );
};

export default Category;

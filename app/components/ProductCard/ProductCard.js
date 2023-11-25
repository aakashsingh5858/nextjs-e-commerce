"use client";
import { getProductDetails } from "@/app/api/api";
import Image from "next/image";
import React, { useEffect } from "react";
import { RxStar, RxStarFilled } from "react-icons/rx";

const ProductCard = ({ product }) => {
  const { title, image, price, rating, id } = product;
  useEffect(() => {
    getProductDetail();
  }, [id]);
  const getProductDetail = () => {
    getProductDetails(id).then((res) => {
      console.log(res, "-------------");
    });
  };
  return (
    <div className="bg-white rounded-xl w-[250px] hover:scale-105 duration-300 h-[350px] shadow-md flex flex-col">
      <div className="flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={220}
          height={220}
          className="w-[220px] h-[200px] object-contain "
        />
      </div>
      <div className="p-4 text-black/[0.9] block">
        <div className="flex  items-center text-black/[0.5]">
          <p className="mr-2  text-sm font-semibold">$ {price}</p>
          <p className="text-base  font-medium line-through"> $ 25.00</p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
        <h2 className="text-sm mt-2 font-medium">{title}</h2>
      </div>
    </div>
  );
};

export default ProductCard;

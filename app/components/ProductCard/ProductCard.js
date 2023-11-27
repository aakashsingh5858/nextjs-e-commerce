"use client";
import { addToCart } from "@/app/redux/reducers/cartItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { RxStar, RxStarFilled } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ product, isWishItem = false }) => {
  const { title, image, price, rating, id } = product;
  const route = useRouter();
  const dispatch = useDispatch();

  return (
    <div
      className={
        isWishItem
          ? "bg-white relative rounded-xl max-[475px]:w-full w-[250px] cursor-pointer duration-300 h-[380px] shadow-md flex flex-col"
          : "bg-white relative rounded-xl max-[475px]:w-full w-[250px] hover:scale-105 cursor-pointer duration-300 h-[330px] shadow-md flex flex-col"
      }
      onClick={() => route.push(`/product/${id}`)}
    >
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
        <h2 className="text-sm  font-medium w-[220px] max-h-[40px] text-ellipsis overflow-hidden ">
          {title}
        </h2>
        <div className="flex mt-2 items-center text-black/[0.5]">
          <p className="mr-2  text-sm font-semibold">$ {price}</p>
        </div>
        <div className="flex items-center mt-2 justify-start gap-1">
          {Array.from({ length: parseInt(rating?.rate || 0) }, (e, i) => {
            return (
              <span className="text-xl text-yellow-300" key={i}>
                <RxStarFilled />
              </span>
            );
          })}
          {Array.from({ length: 5 - parseInt(rating?.rate || 0) }, (e, i) => {
            return (
              <span className="text-xl text-yellow-300" key={i}>
                <RxStar />
              </span>
            );
          })}
          <p className="text-black/[0.5] text-sm">({rating?.count} review)</p>
        </div>
      </div>
      {isWishItem && (
        <button
          className="w-[90%] absolute bottom-3 left-3 py-2 rounded-full bg-black text-white font-medium transition-transform mt-3 hover:opacity-75"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(addToCart({ ...product }));
            toast.success("Product Added To Cart !!!");
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;

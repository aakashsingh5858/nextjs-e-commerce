"use client";
import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxStar, RxStarFilled } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";
import { useParams } from "next/navigation";
import { getProductDetails } from "@/app/api/api";
import { useDispatch } from "react-redux";
import { addTCart } from "@/app/redux/reducers/cartItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToWishList } from "@/app/redux/reducers/wishList";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getProductData();
  }, [productId]);

  const getProductData = () => {
    getProductDetails(productId).then((res) => {
      setProductDetails(res?.data);
    });
  };

  console.log(productDetails);
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10  gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] border border-yellow-300 rounded-xl flex items-center justify-center mx-auto lg:mx-0">
            <div className="md:w-[350px] md:h-[400px] w-auto  flex items-center justify-center">
              <Image
                src={productDetails?.image}
                alt="product"
                width={400}
                height={400}
                className="w-full h-[400px] object-contain"
              />
            </div>
          </div>
          <div className="flex-[1]  py-2 ">
            <div className="text-[25px] font-medium uppercase ">
              {productDetails?.title}
            </div>
            <div className="flex items-center justify-start gap-1">
              {Array.from(
                { length: parseInt(productDetails?.rating?.rate || 0) },
                (e, i) => {
                  return (
                    <span className="text-xl text-yellow-300" key={i}>
                      <RxStarFilled />
                    </span>
                  );
                }
              )}
              {Array.from(
                { length: 5 - parseInt(productDetails?.rating?.rate || 0) },
                (e, i) => {
                  return (
                    <span className="text-xl text-yellow-300" key={i}>
                      <RxStar />
                    </span>
                  );
                }
              )}
              <p className="text-black/[0.5] text-sm">
                ({productDetails?.rating?.count} review)
              </p>
            </div>
            <div className="text-lg font-medium mt-2">
              MRP : $ {productDetails?.price}.00{" "}
            </div>
            <div className="text-xs font-light text-black/[.5]">
              incl. of taxes
            </div>
            <div className="text-xs font-light  text-black/[.5] mt-1">{`(Also includes all applicable duties)`}</div>
            <div className="text-lg font-medium text-black/[.7] mt-2 mb-5">
              {productDetails?.category}
            </div>
            <div className="mb-20">
              <div className="text-lg font-medium mb-2">Description</div>
              <p className="mt-2 text-sm font-light">
                {productDetails?.description}
              </p>
            </div>

            <button
              className="w-full md:w-[400px] py-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                dispatch(addTCart({ ...productDetails }));
                toast.success("Success. Check your cart!", {
                  position: "bottom-right",
                  autoClose: 5000,
                });
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(addToWishList({ ...productDetails }))}
              className="w-full md:w-[400px] py-3 rounded-full border border-black flex items-center justify-center gap-2 text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

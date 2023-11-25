import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import React from "react";
import { RxStar, RxStarFilled } from "react-icons/rx";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10  gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px]  mx-auto lg:mx-0">
            <div className="md:w-[500px] md:h-[400px] w-auto  flex items-center justify-center">
              <Image
                src="/assets/empty-cart.jpg"
                alt="product"
                width={400}
                height={400}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="flex-[1]  py-2 ">
            <div className="text-[25px] font-medium uppercase ">Mobile</div>
            <div className="flex items-center justify-start gap-1">
              {Array.from({ length: parseInt(3 || 0) }, (e, i) => {
                return (
                  <span className="text-xl text-yellow-300">
                    <RxStarFilled />
                  </span>
                );
              })}
              {Array.from({ length: 5 - parseInt(3 || 0) }, (e, i) => {
                return (
                  <span className="text-xl text-yellow-300">
                    <RxStar />
                  </span>
                );
              })}
              <p className="text-black/[0.5] text-sm">(3 review)</p>
            </div>
            <div className="text-lg font-medium mt-2">MRP : $ 19695.00 </div>
            <div className="text-xs font-light text-black/[.5]">
              incl. of taxes
            </div>
            <div className="text-xs font-light  text-black/[.5] mt-1">{`(Also includes all applicable duties)`}</div>
            <div className="text-lg font-medium text-black/[.7] mt-2 mb-5">
              Category
            </div>
            <div className="mb-20">
              <div className="text-lg font-medium mb-2">Description</div>
              <p className="mt-2 text-sm font-light">
                So I started to walk into the water. I won't lie to you boys, I
                was terrified. But I pressed on, and as I made my way past the
                breakers a strange calm came over me. I don't know if it was
                divine intervention or the kinship of all living things but I
                tell you Jerry at that moment, I was a marine biologist.
              </p>
            </div>

            <button className="w-full md:w-[400px] py-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            <button className="w-full md:w-[400px] py-3 rounded-full border border-black flex items-center justify-center gap-2 text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

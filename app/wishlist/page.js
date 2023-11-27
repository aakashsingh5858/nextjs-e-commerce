"use client";
import ProductList from "@/app/components/ProductList";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const { wishListItems } = useSelector((state) => state.wishListItems);

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[2.5rem]  md:text-[2.5rem] mb-5 font-normal capitalize  pb-2 leading-tight">
            <span className="text-indigo-950 border-b-4 border-indigo-950">
              Saved Products
            </span>
          </div>
        </div>
        <ProductList data={wishListItems} isWishItem />
      </Wrapper>
    </div>
  );
};

export default Wishlist;

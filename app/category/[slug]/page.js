import React from "react";
import Wrapper from "../../components/Wrapper";
import ProductCard from "@/app/components/ProductCard/ProductCard";

const Category = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[2.5rem] text-indigo-950 md:text-[3.5rem] mb-5 font-normal  pb-2 leading-tight">
            Running Shoes
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
          {/* {productsData?.map((data, i) => {
            return (
              <div key={i}> */}
          <ProductCard product={[]} />
        </div>
        {/* );
          })}
        </div> */}
      </Wrapper>
    </div>
  );
};

export default Category;

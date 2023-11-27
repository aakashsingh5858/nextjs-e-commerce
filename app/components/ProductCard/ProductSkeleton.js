"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div
      className="bg-white rounded-xl w-[250px] gap-2 hover:scale-105 duration-300 h-[330px] shadow-md flex flex-col"
      onClick={() => route.push(`/product/${id}`)}
    >
      <Skeleton style={{ height: 200 }} />
      <Skeleton containerClassName="px-3" className="h-[30px]" />
      <Skeleton containerClassName="px-3" className="h-[20px]"/>
      <Skeleton containerClassName="px-3" className="h-[30px]" />
    </div>
  );
};

export default ProductSkeleton;

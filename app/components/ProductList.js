"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductSkeleton from "./ProductCard/ProductSkeleton";
import Image from "next/image";

export default function ProductList({
  data,
  isLoading = false,
  isWishItem = false,
}) {
  const [productsData, setProductsData] = useState([]);
  const [sortedProduct, setSortedData] = useState([]);

  useEffect(() => {
    setProductsData(data);
    setSortedData(data);
  }, [data]);

  const sortingProducts = (val) => {
    const product = [...productsData];
    let sortingProduct = [];
    switch (val) {
      case "1":
        sortingProduct = product.sort((a, b) => (a.price > b.price ? 1 : -1));
        setSortedData(sortingProduct);
        break;
      case "2":
        sortingProduct = product.sort((a, b) => (a.price < b.price ? 1 : -1));
        setSortedData(sortingProduct);
        break;
      case "3":
        sortingProduct = product.sort((a, b) =>
          a.rating.rate > b.rating.rate ? 1 : -1
        );
        setSortedData(sortingProduct);
        break;
      case "4":
        sortingProduct = product.sort((a, b) =>
          a.rating.rate < b.rating.rate ? 1 : -1
        );
        setSortedData(sortingProduct);
        break;
      case "5":
        sortingProduct = product.sort((a, b) =>
          a.rating.count > b.rating.count ? 1 : -1
        );
        setSortedData(sortingProduct);
        break;
      case "6":
        sortingProduct = product.sort((a, b) =>
          a.rating.count < b.rating.count ? 1 : -1
        );
        setSortedData(sortingProduct);
        break;
      default:
        setSortedData(product);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-1">
        <select
          className="hover:text-black p-1 rounded-lg bg-gray-200 border-r-8 border-transparent p-2 outline-none cursor-pointer"
          onChange={(e) => sortingProducts(e.target.value)}
        >
          <option value={null}>Sort By</option>
          <option value="1">Price : Low to High</option>
          <option value="2">Price : High to Low</option>
          <option value="3">Rating : Low to High</option>
          <option value="4">Rating : High to Low</option>
          <option value="5">Reviews : Low to High</option>
          <option value="6">Reviews : High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
        {isLoading ? (
          Array.apply(null, Array(10))?.map((a, index) => <ProductSkeleton key={index} />)
        ) : sortedProduct?.length !== 0 ? (
          sortedProduct?.map((data, i) => {
            return (
              <ProductCard product={data} key={i} isWishItem={isWishItem} />
            );
          })
        ) : (
          <div className="w-full m-auto flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/assets/empty-cart.jpg"
              alt="empty-cart"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            />
            <span className="text-xl font-bold">No Product Found</span>
          </div>
        )}
      </div>
    </div>
  );
}

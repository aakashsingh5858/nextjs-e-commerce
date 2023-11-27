import { removeFromCart, updateCart } from "@/app/redux/reducers/cartItem";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: e.target.value,
      id: data?.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    <div className="flex py-5 gap-3 md:gap-5 border p-4 mb-4 shadow-md rounded-xl">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px] flex items-center justify-center">
        <Image src={data?.image} width={500} height={500} alt="cartItem" />
      </div>
      <div className="w-full flex ml-5 md:ml-2 flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-xl capitalize font-medium max-w-[24rem] text-black/[0.8]">
            {data?.title}
          </div>

          <div className="text-sm md:text-md font-medium text-black/[.5] mt-2 ">
            MRP : $ {(data?.price).toFixed(2)}
          </div>
        </div>
        <div className="text-sm mt-2 md:text-md capitalize font-medium text-black/[.5]  md:block">
          category
        </div>
        <div className="flex items-center justify-between mt-4 ">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-medium">Quantity: </div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option
                      value={q}
                      key={i}
                      selected={data?.cartQuantity === q}
                    >
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            className="cursor-pointer text-black/[.5] hover:text-black text-[16px] md:text-[20px]"
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

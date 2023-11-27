import { useRouter } from "next/navigation";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
}) => {
  const route = useRouter();
  const menuList = [
    { id: 1, name: "Home", onClick: () => route.push("/") },
    { id: 2, name: "About" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact" },
  ];

  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {menuList.map((l, i) => {
        return (
          <div key={l.id}>
            {!!l.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative "
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {l.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -m-5 mt-4 -mb-4">
                    {categories?.map((subMenu, i) => {
                      return (
                        <li
                          key={i}
                          className="py-4 px-8 border-t capitalize flex justify-between"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                            route.push(`/category/${subMenu}`);
                          }}
                        >
                          {subMenu}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li
                className="py-4 px-5 border-b"
                onClick={() => {
                  l.onClick;
                  setMobileMenu(false);
                }}
              >
                {l.name}
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default MenuMobile;

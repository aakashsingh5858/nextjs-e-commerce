import { useRouter } from "next/navigation";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  const route = useRouter();
  const menuList = [
    { id: 1, name: "Home", onClick: () => route.push("/") },
    { id: 2, name: "About", onClick: () => route.push("/about") },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", onClick: () => route.push("/contact") },
  ];
  const subMenuList = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
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
                    {subMenuList.map((subMenu, i) => {
                      return (
                        <li
                          key={subMenu.id}
                          className="py-4 px-8 border-t flex justify-between"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          {subMenu.name}
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

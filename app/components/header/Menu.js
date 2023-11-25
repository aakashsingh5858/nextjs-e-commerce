import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ showCatMenu, setShowCatMenu }) => {
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
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {menuList.map((l, i) => {
        return (
          <div key={l.id}>
            {!!l.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {l.name}
                <BsChevronDown size={14} />
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuList.map((subMenu, i) => {
                      return (
                        <li
                          key={subMenu.id}
                          className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                          onClick={() => setShowCatMenu(false)}
                        >
                          {subMenu.name}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer" onClick={l.onClick}>
                {l.name}
              </li>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default Menu;

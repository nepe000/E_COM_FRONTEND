import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className=" tracking-wider flex justify-between items-center py-6 px-10">
        <div>
          <p className="font-bold text-xl text-blue-500">
            {" "}
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </p>
        </div>
        <div className="flex gap-5 text-lg">
          <div>
            <Link href={"/"}>
              <p className="transition-all duration-300 hover:text-blue-600 font-semibold">
                Home
              </p>
            </Link>
          </div>
          <div>
            <Link href={"/contact-us"}>
              <p className="transition-all duration-300 hover:text-blue-600 font-semibold">
                Contact US
              </p>
            </Link>
          </div>
          <div>
            <Link href={"/about-us"}>
              <p className="transition-all duration-300 hover:text-blue-600 font-semibold">
                About US
              </p>
            </Link>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div>
            <Link href={"/wishlist"}>
              <CiHeart
                className="text-gray-500 transition-all duration-300 hover:scale-[1.1]"
                size={28}
              />
            </Link>
          </div>
          <div>
            <Link href={"/cart"}>
              <IoMdCart
                className="text-gray-500 transition-all duration-300 hover:scale-[1.1]"
                size={28}
              />
            </Link>
          </div>
          <div>
            <Link href={"/login"}>
              <IoPersonSharp
                className="text-gray-500 transition-all duration-300 hover:scale-[1.1]"
                size={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

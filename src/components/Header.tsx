"use client";
import Image from "next/image";
import MenuIcon from "/public/menu.svg";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex px-2 py-4  justify-between items-center sticky w-full backdrop-blur-md">
      <div className="inline-flex gap-2 items-center">
        <Image src="/logosaas.png" alt="logo image" width={32} height={32} />
        <span className="text-sm font-medium">made by souvik</span>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <nav className="inline-flex gap-3 items-center text-nav-link">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Updates</a>
          <a href="#">Help</a>
        </nav>
        <button className="btn btn-primary">Get for free</button>
      </div>
      <Image
        className="block sm:hidden"
        alt="hamburger menu icon"
        src={MenuIcon}
        width={32}
        height={32}
      />
    </div>
  );
};
export default Header;

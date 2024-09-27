import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-slate-300 border-gray-200 px-2 pr-3">
      <div class=" flex items-center justify-between p-4 px-3">
        <Link to={"/"}>
          <img
            className="w-[60px] h-[55px] text-xs"
            src="https://www.iconpacks.net/icons/2/free-healthcare-icon-3609-thumb.png"
            alt=""
          />
        </Link>

        <ul class="font-medium flex gap-7">
          <li>
            <Link to={"/"} class=" text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/addService"} class="text-xl">
              AddService
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

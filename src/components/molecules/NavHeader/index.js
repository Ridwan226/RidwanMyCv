import React from "react";

function NavHeader() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between my-5 ">
        <h1 className="font-bold text-xl">
          Ridwan<span className="text-green-400">Romadhon</span>.{" "}
        </h1>
        <div className="">
          <ul className="flex flex-row">
            <li className="mr-5 text-lg font-medium ">Home</li>
            <li className="mr-5 text-lg font-medium ">Portofolio</li>
            <li className="mr-5 text-lg font-medium ">Blog</li>
            <li className="mr-5 text-lg font-medium ">About</li>
            <li className="mr-5 text-lg font-medium ">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;

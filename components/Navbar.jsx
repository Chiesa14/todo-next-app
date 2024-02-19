import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around py-3 flex-wrap">
      <h1 className=" font-semibold text-lg">Todo APP</h1>
      <ul className="flex gap-[40px] text-sm">
        <li>Home</li>
        <li>Prouducts</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
};

export default Navbar;

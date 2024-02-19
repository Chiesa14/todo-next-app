import Image from "next/image";
import burger from "../../assets/burger.jpg";
import React from "react";

const pages = () => {
  return (
    <div>
      <Image src={burger} alt="Sample Image in Next" width={200} />
    </div>
  );
};

export default pages;

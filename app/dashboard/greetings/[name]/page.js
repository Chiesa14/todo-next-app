import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>Welcome Back {params.name} </h1>
    </div>
  );
};

export default page;

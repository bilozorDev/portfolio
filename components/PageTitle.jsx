import React from "react";

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-4">
      <h1 className="flex grow-0 text-2xl font-bold border-b-2 pb-4 text-zinc-800">
        {title}
      </h1>
      <span className="flex justify-end text-gray-400 capitalize font-extralight text-base pt-2">{subtitle}</span>
    </div>
  );
};

export default PageTitle;

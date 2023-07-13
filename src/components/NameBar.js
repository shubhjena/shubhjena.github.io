import React from "react";

export default function NameBar() {
  console.log("NameBar");
  return (
    <div className="flex justify-start mt-24">
      <div className="fixed pl-24 z-20">
        <span className="text-6xl font-normal font-serif tracking-wider">
          Shubhashish
        </span>
      </div>
      <div className="fixed pl-24 indent-96">
        <span className="text-6xl font-normal font-serif tracking-wider">
          Jena
        </span>
      </div>
    </div>
  );
}

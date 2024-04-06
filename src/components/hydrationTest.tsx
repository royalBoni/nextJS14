"use client";

import React from "react";

const HydrationTest = () => {
  const a = Math.random();
  console.log(a);
  return (
    <div>
      <p>{a}</p>
    </div>
  );
};

export default HydrationTest;

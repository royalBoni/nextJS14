"use client";

import React from "react";
import { PropsWithChildren } from "react";

const ClientSideProviderTest = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default ClientSideProviderTest;

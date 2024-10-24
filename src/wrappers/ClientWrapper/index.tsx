"use client";
import React from "react";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default ClientWrapper;

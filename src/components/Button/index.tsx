"use client";
import React from "react";

type Props = {
  variant: "primary" | "primary-outline";
  children: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button: React.FC<Props> = (props) => {
  const { variant, children, onClick } = props;

  return (
    <button
      className={`${variant === "primary" && "btn-primary"} ${
        variant === "primary-outline" && "btn-primary-outline"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

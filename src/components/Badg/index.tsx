import React from "react";

type Props = {
  variant: "primary" | "primary-outline";
  children: React.ReactNode;
};
const Badge: React.FC<Props> = (props) => {
  const { children, variant } = props;
  return (
    <div
      className={`${
        variant === "primary-outline" &&
        "border border-gray rounded-full text-secondary px-3 py-3"
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <div
      className="shadow-xl
      rounded-xl p-4"
    >
      {children}
    </div>
  );
};

export default Card;

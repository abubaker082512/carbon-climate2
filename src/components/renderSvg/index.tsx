import React, { ReactNode } from "react";
import { ReactSVG } from "react-svg";

interface SVGProps {
  icon: ReactNode;
  className?: string;
  fullSize?: boolean;
}

const SVG: React.FC<SVGProps> = ({
  icon,
  className = "",
  fullSize = false,
}) => {
  return (
    <ReactSVG
      src={JSON.stringify(icon)}
      className={`${className} ${fullSize ? "w-full h-full" : ""}`}
    />
  );
};

export default SVG;

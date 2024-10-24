import React from "react";

type Props = {
  variant: "primary" | "secondary";
  options: Array<{ label: string | number; value: string | number }>;
};
const SelectInput: React.FC<Props> = (props) => {
  const { variant, options } = props;

  const PRIMARY_STYLES = "bg-white text-primary font-medium";
  const SECONDARY_STYLES = "bg-[#50B69A] text-white font-medium";
  return (
    <div
      className={`relative  rounded-md w-full ${
        variant === "primary" && PRIMARY_STYLES
      } ${variant === "secondary" && SECONDARY_STYLES}`}
    >
      <select
        className={`outline-none w-full px-3 py-2 rounded-md ${
          variant === "primary" && PRIMARY_STYLES
        } ${variant === "secondary" && SECONDARY_STYLES}`}
      >
        {options.map((item, index) => {
          return (
            <option
              key={`option-${index}`}
              value={item.value}
              className="bg-white hover:bg-primary-light hover:text-white text-primary"
            >
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;

import React from "react";
type Props = {
  name: string;
  variant: "primary" | "secondary";
  type?: "text" | "password" | "date";
  label?: string;
  placeHolder?: string;
};
const Input: React.FC<Props> = (props) => {
  const { name, type = "text", label, placeHolder, variant } = props;

  const INPUT_SECONDARY = "text-white font-medium bg-[#50B69A] border-none";
  return (
    <div className="flex flex-col w-full border-none">
      <label htmlFor={name}>{label}</label>

      <div
        className={`flex gap-2 px-3 py-2 rounded-md ${
          variant === "secondary" && INPUT_SECONDARY
        }`}
      >
        {/* <SVG icon={CalendarIcon} className=" text-white" /> */}
        <input
          name={name}
          placeholder={placeHolder}
          type={type}
          className={`w-full rounded-md outline-none  ${
            variant === "secondary" && INPUT_SECONDARY
          }`}
        />
      </div>
    </div>
  );
};

export default Input;

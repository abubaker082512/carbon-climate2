import React, { useState, ChangeEvent } from "react";
import EyeOffIcon from "../../assets/svg/eye-off.svg";
import EyeONIcon from "../../assets/svg/eye.svg";
import SVG from "../renderSvg";
import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  icon?: React.ReactNode;
  name: string;
  label?: string;
  error?: string;
  register: UseFormRegister<{ email: string; role: string }>; // Define the type for register
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "date";
  className?: string;
  disable?: boolean;
  height?: string;
  autoComplete?: string;
  maxLength?: number;
  alphabet?: boolean;
  alphanumeric?: boolean;
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
}

const InputField: React.FC<InputFieldProps> = ({
  icon,
  // name,
  label,
  error,
  // register,
  onChange,
  placeholder,
  type = "text",
  className = "",
  disable = false,
  height = "50px",
  autoComplete = "off",
  maxLength = 50,
  alphabet = false,
  alphanumeric = false,
  variant = "primary",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (alphabet) {
      e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    }
    if (alphanumeric) {
      e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s]/g, "");
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`mb-5 w-full ${className}`}>
      {label && (
        <label className="mb-[3px] ml-3 block text-[16px] font-medium text-black">
          {label}
        </label>
      )}
      <div className="flex items-center rounded-[12px] border border-[#00401A] px-3">
        {icon && <span className="mr-2">{icon}</span>}

        <input
          // {...register(name)} // Directly use register here
          type={type === "password" && !showPassword ? "password" : type} // Allow email type here
          disabled={disable}
          onChange={handleInputChange}
          maxLength={maxLength}
          placeholder={placeholder}
          autoComplete={type === "password" ? "new-password" : autoComplete}
          className={` ${
            variant === "secondary" && "bg-primary-light text-white font-medium"
          } ${
            variant === "primary" &&
            "flex-1 appearance-none border-none bg-transparent outline-none disabled:cursor-not-allowed disabled:opacity-30"
          }`}
          style={{
            height,
            MozAppearance: "textfield",
            backgroundColor: "transparent",
          }}
        />

        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            className="cursor-pointer text-gray-500"
          >
            {showPassword ? (
              <SVG icon={EyeONIcon} />
            ) : (
              <SVG icon={EyeOffIcon} />
            )}
          </span>
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error || "error"}</p>}
    </div>
  );
};

export default InputField;

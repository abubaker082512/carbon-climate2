import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl"; // Default size options
  children: ReactNode; // Allows any valid React children
  isCancel?: boolean; // Optional, can be undefined
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  size = "md",
  children,
  isCancel,
}) => {
  if (!isOpen) return null;

  const sizeClasses = {
    xs: "w-11/12 max-w-xs",
    sm: "w-11/12 sm:w-3/4 max-w-sm",
    md: "w-11/12 sm:w-3/4 md:w-1/2 max-w-md",
    lg: "w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-lg",
    xl: "w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-xl",
  };

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen w-full min-w-full items-center justify-center">
      <div
        className="w-screen h-screen backdrop-blur-sm bg-primary bg-opacity-20 fixed top-0 left-0 z-10"
        onClick={onClose}
      ></div>
      <div
        className={`relative z-20 overflow-hidden rounded-2xl bg-white p-4 shadow-lg ${sizeClasses[size]}`}
      >
        {isCancel && (
          <button
            className="absolute right-2 top-2 text-lg text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ×
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

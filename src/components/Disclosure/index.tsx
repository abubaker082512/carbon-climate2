import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  label: string | React.ReactNode;
  open?: boolean;
  disabled?: boolean;
};
const Disclosure: React.FC<Props> = (props) => {
  const { children, label, open = false, disabled = false } = props;

  const [isOpen, setOpen] = useState(open);
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex justify-between">
        <div>{label}</div>
        {!disabled && (
          <div
            onClick={(e) => setOpen((value) => !value)}
            className="cursor-pointer"
          >
            {isOpen ? <IconChevronUp /> : <IconChevronDown />}
          </div>
        )}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Disclosure;

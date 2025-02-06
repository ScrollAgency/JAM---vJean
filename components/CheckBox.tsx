import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import Icons from "./icons";

interface CheckboxProps {
  checked?: boolean;
  type?: "Checkbox" | "Check circle";
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, type = "Checkbox", disabled, onChange }) => {
  const variants = cva(
    "peer p-[3px] size-5 cursor-pointer transition-all appearance-none rounded border enabled:group-hover:border-[#002400]  border-[#D0D5DD] outline-none shrink-0 disabled:opacity-30 focus:shadow-[0_0_0_4px_rgba(232,255,204,1)]",
    {
      variants: {
        type: {
          Checkbox: "rounded-md checked:border-[#002400] focus:outline-none checked:bg-white",
          "Check circle": "rounded-[100px] checked:bg-[#002400] checked:border-transparent",
        },
      },
      defaultVariants: {
        type: "Checkbox",
      },
    }
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div className={cn("inline-flex items-center group")}>
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          className={cn(variants({ type }))}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
"use client";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useState } from "react";

interface SwitchProps {
  disabled?: boolean;
}

const Switch = ({ disabled }: SwitchProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [selected, setSelected] = useState(false);

  const switchVariant = cva(
    `absolute cursor-pointer bg-grey-200 rounded-[24px] w-full h-full
     before:content-[''] before:absolute before:top-[2px] before:left-[2px]
     before:w-[20px] before:h-[20px] before:bg-white before:rounded-full before:transition-all
     disabled:opacity-50`,
    {
      variants: {
        selected: {
          true: "before:translate-x-[20px] bg-pine-500",
          false: "before:translate-x-0 bg-grey-200",
        },
      },
    }
  );

  return (
    <div
      aria-disabled={disabled}
      className={`relative inline-flex items-center w-[44px] h-[24px] disabled:opacity-50`}
    >
      <input
        className="hidden"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        type="checkbox"
        id="switch"
        checked={selected}
        onChange={() => setSelected(!selected)}
        disabled={disabled}
        data-focus={focus}
      />
      <label className={cn(switchVariant({ selected }))} htmlFor="switch" />
    </div>
  );
};

export default Switch;

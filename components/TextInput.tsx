import React, { PropsWithChildren, useState } from "react";
import Icons from "./Icons";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "tailwindcss/tailwind.css";

interface TextInputProps extends PropsWithChildren {
  Type?: "Default" | "Leading Text" | "TextArea";
  Label?: string;
  Placeholder?: string;
  Hint?: string;
  prefixedText?: string;
  Destructive?: boolean;
  disabled?: boolean;
  iconImage?: string;
}

const TextInput = ({
  Placeholder = "Placeholder",
  Label,
  Type = "Default",
  Destructive,
  disabled,
  iconImage,
  prefixedText,
  Hint,
}: TextInputProps) => {
  const [focus, setFocus] = useState(false);

  const inputVariant = cva(
    "flex border border-solid w-full border-grey-500 transition-all bg-white rounded-2xl items-center",
    {
      variants: {
        Destructive: {
          true: "border-1 border-solid border-error-700 ",
          false: "border-1 border-solid border-pine-500",
        },
        focus: {
          true: "",
          false: "",
        },
      },
      compoundVariants: [
        {
          Destructive: true,
          focus: true,
          className: "shadow-[0_0_0_4px_#D92D20]",
        },
        {
          Destructive: false,
          focus: true,
          className: "border-1 border-solid border-pine-500 shadow-[0_0_0_4px_#E8FFCC]",
        },
      ],
    }
  );

  return (
    <div className="flex flex-col w-full gap-[6px] min-w-[320px]">
      <label className="text-black text-lg leading-5 font-medium">{Label}</label>
      <div className={cn(inputVariant({ Destructive, focus }))}>
        {prefixedText && <span className="text-black text-base font-normal pl-[26px]">{prefixedText}</span>}
        {iconImage && (
          <span className="pl-[14px]">
            <Icons.arrow />
          </span>
        )}
        {Type == "Default" && (
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type={Type}
            placeholder={Placeholder}
            className={`bg-transparent placeholder:text-grey-500 placeholder:text-lg text-base font-normal w-full flex-1 p-3 outline-none text-black`}
            disabled={disabled}
          />
        )}
        {Type == "TextArea" && (
          <textarea
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={Placeholder}
            className={`bg-transparent placeholder:text-grey-500 placeholder:text-lg text-base font-normal w-full flex-1 p-3 outline-none min-h-32`}
            disabled={disabled}
          />
        )}
      </div>
      <p className="text-black text-sm font-normal flex gap-1 items-center">
        {Destructive && <Icons.error />}
        {Hint && <span className={`flex-1 text-base ${Destructive && "text-error-700"}`}>{Hint}</span>}
      </p>
    </div>
  );
};

export default TextInput;

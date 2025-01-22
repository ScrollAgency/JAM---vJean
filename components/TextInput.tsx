import React, { PropsWithChildren, useState } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "tailwindcss/tailwind.css";
import Icons from "@/components/Icons";

interface TextInputProps extends PropsWithChildren {
  Type?: "Default" | "Leading Text" | "TextArea" | "Password" | "Phone";
  Label?: string;
  Placeholder?: string;
  Hint?: string;
  prefixedText?: string;
  Destructive?: boolean;
  disabled?: boolean;
  iconUrl?: string;
  className?: string;
}

const TextInput = ({
  Placeholder = "Placeholder",
  Label = "Label",
  Type = "Default",
  Destructive,
  disabled,
  iconUrl,
  prefixedText,
  Hint,
  className,
}: TextInputProps) => {
  const [focus, setFocus] = useState(false);

  const inputVariant = cva(
    "flex w-full transition-all bg-white rounded-2xl items-center",
    {
      variants: {
        Destructive: {
          true: "border-1 border-solid border-error-700",
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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.charCode;
    if (
      !(
        (charCode >= 48 && charCode <= 57) ||
        charCode === 32 ||
        charCode === 43 ||
        charCode === 45 ||
        charCode === 40 ||
        charCode === 41
      )
    ) {
      event.preventDefault();
    }
  };

  return (
    <div className="flex flex-col w-full gap-[6px] min-w-[320px]">
      <label className="text-black text-lg leading-5 font-medium">{Label}</label>
      <div className={cn(inputVariant({ Destructive, focus }))}>
        {prefixedText && (
          <span className="text-black text-base font-normal pl-[26px]">
            {prefixedText}
          </span>
        )}
        {iconUrl && (
          <span className="pl-[14px]">
            <img src={iconUrl} alt="icon" className="h-6 w-6" />
          </span>
        )}
        {Type === "Default" && (
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type="text"
            placeholder={Placeholder}
            className={`bg-transparent placeholder:text-grey-500 placeholder:text-lg text-base font-normal w-full flex-1 p-3 outline-none ${className}`}
            disabled={disabled}
          />
        )}
        {Type === "TextArea" && (
          <textarea
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            placeholder={Placeholder}
            className={`bg-transparent placeholder:text-grey-500 placeholder:text-lg text-base font-normal w-full flex-1 p-3 outline-none min-h-32 ${className}`}
            disabled={disabled}
          />
        )}
        {Type === "Phone" && (
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type="tel"
            placeholder="+33 6 12 34 56 78"
            className={`bg-transparent placeholder:text-grey-500 placeholder:text-lg text-base font-normal flex-1 p-3 outline-none ${className}`}
            disabled={disabled}
            onKeyPress={handleKeyPress}
          />
        )}
        {Type === "Password" && (
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            type="password"
            placeholder={Placeholder}
            className={`bg-transparent placeholder:text-grey-500 placeholder:text-lg text-base font-normal w-full flex-1 p-3 outline-none ${className}`}
            disabled={disabled}
          />
        )}
      </div>
      <p className="text-black text-sm font-normal flex gap-1 items-center">
        {Destructive && <Icons.error />}
        {Hint && (
          <span className={`flex-1 text-base ${Destructive && "text-error-700"}`}>
            {Hint}
          </span>
        )}
      </p>
    </div>
  );
};

export default TextInput;

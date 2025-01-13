import React, { ButtonHTMLAttributes, useEffect } from "react";
import Icons from "./icons";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type HTMLButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "disabled">;

interface ButtonProps extends HTMLButtonProps {
  label: string;
  size?: "Small" | "Large";
  icon?: "Start" | "End" | "None" | "Only";
  iconUrl?: string;
  variant?: "Primary" | "Secondary";
  desctructive?: boolean;
}

const Button = ({
  label = "Label",
  icon = "None",
  desctructive = false,
  size = "Small",
  variant = "Primary",
  disabled,
  onClick,
  iconUrl,
}: ButtonProps) => {
  const variants = cva(
    `flex w-full justify-center items-center shrink-0 rounded-2xl transition-all outline-none gap-3
      shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] group disabled:opacity-50
    `,
    {
      variants: {
        variant: {
          Primary: "bg-lime-300 enabled:hover:bg-lime-400",
          Secondary: "bg-white border-[1px] border-solid border-lime-300 enabled:hover:bg-[#F7FFD5]",
        },
        size: {
          Small: "px-2.5 py-3",
          Large: "p-3.5",
        },
        icon: {
          Start: "",
          End: "",
          Only: "",
          None: "",
        },
        desctructive: {
          true: "",
          false: "",
        },
      },
      compoundVariants: [
        {
          size: "Small",
          icon: "Only",
          className: "size-12",
        },
        {
          size: "Large",
          icon: "Only",
          className: "size-[61px]",
        },
        {
          desctructive: false,
          className: "focus:shadow-[0_0_0_4px_#E8FFCC]",
        },
        {
          desctructive: true,
          className: "focus:shadow-[0_0_0_4px_#D92D20]",
        },
        {
          variant: "Primary",
          desctructive: true,
          className: "bg-error-600 enabled:hover:bg-error-700",
        },
        {
          variant: "Secondary",
          desctructive: true,
          className: "bg-error-50 enabled:hover:bg-error-100 outline-none border-[1px] border-solid border-error-700",
        },
      ],
    }
  );

  const textVariants = cva("font-bold transition-all text-pine-500 uppercase", {
    variants: {
      variant: {
        Primary: "",
        Secondary: "",
      },
      size: {
        Small: "text-sm",
        Large: "text-base",
      },
      desctructive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "Primary",
        desctructive: true,
        className: "text-white",
      },
      {
        variant: "Secondary",
        desctructive: false,
        className: "enabled:group-hover:text-lime-800",
      },
      {
        variant: "Secondary",
        desctructive: true,
        className: "text-error-700",
      },
    ],
    defaultVariants: {
      variant: "Primary",
      size: "Small",
      desctructive: false,
    },
  });

  useEffect(() => {
    console.log("Button rendered");
    console.log(iconUrl);
  });

  return (
    <button
      // data-type={type}
      // disabled={state == "Disabled"}
      // className={style.button}
      disabled={disabled}
      className={cn(variants({ variant, size, icon, desctructive }))}
      onClick={onClick}
    >
      {(icon == "Start" || icon == "Only") && <Icons.arrow />}
      {icon != "Only" && (
        <span aria-disabled={disabled} className={cn(textVariants({ variant, size, desctructive }))}>
          {label}
        </span>
      )}
      {icon == "End" && <Icons.arrow />}
    </button>
  );
};

export default Button;

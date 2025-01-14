import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

type HTMLButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "disabled">;

interface ButtonProps extends HTMLButtonProps {
  label?: string;
  icon?: "start" | "end" | "only" | "none";
  desctructive?: boolean;
  variant?: "Primary" | "Secondary";
  iconImage?: string;
  className?: string; // Ajout de la propriété className
  backgroundColor?: "BAFE68" | "FFFFFF";
}

const Button = ({
  label = "label",
  icon = "none",
  desctructive = false,
  variant = "Primary",
  disabled,
  onClick,
  iconImage,
  className, // Ajout de la propriété className
  backgroundColor,
}: ButtonProps) => {
  const variants = cva(
    `flex w-full justify-center items-center shrink-0 rounded-2xl transition-all outline-none gap-3
      shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] group disabled:opacity-50
    `,
    {
      variants: {
        desctructive: {
          true: "bg-red-500 text-white",
          false: "bg-blue-500 text-white",
        },
        variant: {
          Primary: "bg-lime-500 text-white",
          Secondary: "bg-lime-500 text-white",
        },
      },
      compoundVariants: [
        {
          desctructive: true,
          variant: "Primary",
          className: "bg-red-500 text-white",
        },
        {
          desctructive: false,
          variant: "Secondary",
          className: "bg-gray-500 text-white",
        },
      ],
    }
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(variants({ desctructive, variant }), className)}
    >
      {icon === "start" && iconImage && (
        <img src={iconImage} alt="Icon" className="icon-start w-5" />
      )}
      <span>{label}</span>
      {icon === "end" && iconImage && (
        <img src={iconImage} alt="Icon" className="icon-end w-5" />
      )}
      {icon === "only" && iconImage && (
        <img src={iconImage} alt="Icon" />
      )}
    </button>
  );
};

export default Button;

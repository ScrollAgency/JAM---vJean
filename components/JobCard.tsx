import React from "react";
import Icons from "./Icons";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface JobCardProps {
  state?: "default" | "liked" | "applied" | "new" | "lastMin";
  title: string;
  city: string;
  companyName: string;
  logo: string;
  tags?: string[];
}

const JobCard = ({ state, title, city, companyName, logo }: JobCardProps) => {
  const cardVariant = cva(
    "w-[300px] flex p-[8px_8px_16px_8px] flex-col items-start rounded-2xl bg-white shadow-[0px_4px_40px_0px_rgba(0,0,0,0.08)]",
    {
      variants: {
        state: {
          default: "",
          liked: "border border-solid border-[#FF4D84]",
          applied: "border border-solid border-[#002400]",
          new: "border border-solid border-[#BAFE68]",
          lastMin: "border border-solid border-[#F6165B]",
        },
      },
    }
  );

  return (
    <div className={cn(cardVariant({ state }))}>
      <div className="size-full flex p-[12px_8px_8px_8px] flex-col gap-2 items-stretch">
        <div className="flex pr-[20px] items-start gap-[10px] self-stretch">
          <img alt={companyName} className="h-[30px] w-auto shrink-0" src={logo} />
        </div>
        <div className="flex flex-col items-start gap-4 self-start w-full">
          <div className="flex flex-col items-start gap-1 self-stretch w-full">
            <p className="text-black text-lg leading-[27px] font-semibold">{title}</p>
            <div className="flex justify-between w-full items-start self-stretch">
              <div className="flex justify-center items-center gap-1">
                <Icons.mapPin />
                <p className="text-black text-xs leading-normal font-medium text-center">{city},</p>
                <p className="text-black text-xs leading-normal font-medium text-center">{companyName}</p>
              </div>
              <div className="flex items-center gap-2 self-stretch">
                <div className="gap-1 flex items-center">
                  <span className="flex w-6 h-[13px] items-center gap-[2px]">
                    <Icons.car />
                    <p className="text-center text-[10px] font-medium leading-normal text-grey-400">12'</p>
                  </span>
                  <span className="flex w-6 h-[13px] items-center gap-[2px]">
                    <Icons.bus />
                    <p className="text-center text-[10px] font-medium leading-normal text-grey-400">12'</p>
                  </span>
                  <span className="flex w-6 h-[13px] items-center gap-[2px]">
                    <Icons.bycicle />
                    <p className="text-center text-[10px] font-medium leading-normal text-grey-400">12'</p>
                  </span>
                  <span className="flex w-6 h-[13px] items-center gap-[2px]">
                    <Icons.walk />
                    <p className="text-center text-[10px] font-medium leading-normal text-grey-400">12'</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-full items-start content-stretch gap-1 flex-wrap"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

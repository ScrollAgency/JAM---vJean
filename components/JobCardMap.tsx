import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";

// Définition des props
interface JobCardMapProps extends VariantProps<typeof cardVariant> {
    title: string;
    city: string;
    companyName: string;
    logo: string;
    customIcons?: {
        mapPin?: string;
        car?: string;
        bus?: string;
        bicycle?: string;
        walk?: string;
    };
}

// Variantes de style avec CVA
const cardVariant = cva(
    "w-[300px] flex p-[8px_8px_16px_8px] flex-col items-start bg-white shadow-[0px_4px_40px_0px_rgba(0,0,0,0.08)]",
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
        defaultVariants: {
            state: "default",
        },
    }
);

const JobCardMap = ({
    state = "default",
    title,
    city,
    companyName,
    logo,
    customIcons,
}: JobCardMapProps) => {
    return (
        <div className={cn(cardVariant({ state }))}>
            {/* Conteneur principal */}
            <div className="">
                {/* Logo et en-tête */}
                <div className="flex pr-[20px] items-start gap-[10px] self-stretch">
                    <img
                        src={logo}
                        alt={`${companyName} logo`}
                        className="w-[60px] h-[60px] object-contain"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-sm text-gray-500">{companyName}</p>
                    </div>
                </div>

                {/* Ville et options */}
                <div className="mt-2 text-sm flex items-center gap-1">
                    {customIcons?.mapPin && (
                        <img
                            src={customIcons.mapPin}
                            alt="Location icon"
                            className="w-4 h-4"
                        />
                    )}
                    <span>{city}</span>
                </div>

                {/* Pied de page (icônes ou boutons) */}
                <div className="mt-3 flex gap-2">
                    {customIcons?.car && (
                        <img
                            src={customIcons.car}
                            alt="Car icon"
                            className="w-5 h-5 text-gray-500"
                        />
                    )}
                    {customIcons?.bus && (
                        <img
                            src={customIcons.bus}
                            alt="Bus icon"
                            className="w-5 h-5 text-gray-500"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobCardMap;

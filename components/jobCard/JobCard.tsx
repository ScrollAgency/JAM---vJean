import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";
import Image from 'next/image';

// Props du composant
interface JobCardProps extends VariantProps<typeof cardVariant> {
  state?: "default" | "liked" | "applied" | "new" | "lastMin";
  title: string;
  city: string;
  companyName: string;
  logo: string;
  tags?: string[]; // Liste de tags comme "CDI", "Télétravail 100%"
  customIcons?: {
    mapPin?: string;
    car?: string;
    bus?: string;
    bicycle?: string;
    walk?: string;
  };
}

const cardVariant = cva(
  "w-[330px] flex flex-col p-4 rounded-2xl bg-white shadow-md relative border border-solid",
  {
    variants: {
      state: {
        default: "border-gray-200",
        liked: "border-[#FF4D84]",
        applied: "border-[#002400]",
        new: "border-[#BAFE68]",
        lastMin: "border-[#F6165B]",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

const JobCard: React.FC<JobCardProps> = ({
  state = "default",
  title,
  city,
  companyName,
  logo,
  tags = [],
  customIcons = {},
}) => {
  return (
    <div className={cn(cardVariant({ state }))}>
      {/* En-tête : Logo + titre */}
      <div className="flex items-center gap-4">
        <Image
          src={logo}
          alt={`${companyName} logo`}
          width={56}
          height={56}
          className="object-contain rounded-md"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{companyName}</p>
        </div>
      </div>

      {/* Localisation et transport */}
      <div className="mt-4 flex items-center text-sm text-gray-600 gap-2">
        {customIcons.mapPin && (
          <Image src={customIcons.mapPin} alt="Location icon" width={16} height={16} />
        )}
        <span>{city}</span>
        <div className="flex items-center gap-1 ml-auto">
          {customIcons.car && (
            <Image src={customIcons.car} alt="Car icon" width={16} height={16} />
          )}
          {customIcons.bus && (
            <Image src={customIcons.bus} alt="Bus icon" width={16} height={16} />
          )}
          {customIcons.bicycle && (
            <Image src={customIcons.bicycle} alt="Bicycle icon" width={16} height={16} />
          )}
          {customIcons.walk && (
            <Image src={customIcons.walk} alt="Walk icon" width={16} height={16} />
          )}
        </div>
      </div>

      {/* Liste des tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-gray-900 bg-gray-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Étiquette "Nouveau" */}
      {state === "new" && (
        <div
          className="absolute top-2 left-2 bg-[#BAFE68] text-green-900 text-xs font-bold px-3 py-1 rounded-full uppercase"
          role="status"
        >
          Nouveau
        </div>
      )}

      {/* Bouton favori */}
      {state === "liked" && (
        <button
          className="absolute top-2 right-2 w-8 h-8 bg-[#FF4D84] text-white rounded-full flex items-center justify-center"
          aria-label="Remove from favorites"
        >
          ❤
        </button>
      )}
    </div>
  );
};

export default JobCard;

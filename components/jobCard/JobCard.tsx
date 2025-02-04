import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "classnames";

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
  className?: string; // Ajout du props className
  onClick?: () => void; // Ajout du props onClick
}

export interface JobCardActions {
  click(): void;
}

const cardVariant = cva(
  "w-[330px] flex flex-col rounded-2xl bg-white shadow-md relative border border-solid",
  {
    variants: {
      state: {
        default: "",
        liked: "",
        applied: "",
        new: "",
        lastMin: "",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

const JobCard = forwardRef<JobCardActions, JobCardProps>(({
  state = "default",
  title,
  city,
  companyName,
  logo,
  tags = [],
  customIcons = {},
  className, // Ajout du props className
  onClick, // Ajout du props onClick
}, ref) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    click() {
      buttonRef.current?.click();
      console.log("JobCard clicked");
    },
  }));

  const handleFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Favorite button clicked");
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
    console.log("JobCard clicked");
  };

  return (
    <div className={cn(cardVariant({ state }), className)} onClick={handleClick}>
      {/* En-tête : Logo + titre */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={logo}
          alt={`${companyName} logo`}
          className="w-14 h-18 object-contain rounded-md"
        />
        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{companyName}</p>
        </div>
      </div>

      {/* Localisation et transport */}
      <div className="mt-4 flex items-center text-sm text-gray-600 gap-2">
        {customIcons.mapPin && (
          <img src={customIcons.mapPin} alt="Location icon" className="w-4 h-4" />
        )}
        <span>{city}</span>
        <div className="flex items-center gap-1 ml-auto">
          {customIcons.car && (
            <img src={customIcons.car} alt="Car icon" className="w-4 h-4" />
          )}
          {customIcons.bus && (
            <img src={customIcons.bus} alt="Bus icon" className="w-4 h-4" />
          )}
          {customIcons.bicycle && (
            <img src={customIcons.bicycle} alt="Bicycle icon" className="w-4 h-4" />
          )}
          {customIcons.walk && (
            <img src={customIcons.walk} alt="Walk icon" className="w-4 h-4" />
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
          className="absolute top-1 left-1 bg-[#BAFE68] text-green-900 text-xs font-bold px-3 py-1 rounded-full uppercase"
          role="status"
        >
          Nouveau
        </div>
      )}

      {/* Bouton favori */}
      {state === "liked" && (
        <button
          ref={buttonRef}
          className="absolute top-1 right-1 w-8 h-8 bg-[#FF4D84] text-white rounded-full flex items-center justify-center"
          aria-label="Remove from favorites"
          onClick={handleFavoriteClick} // Ajouter l'action Plasmic
        >
          ❤
        </button>
      )}
    </div>
  );
});

JobCard.displayName = "JobCard";
export default JobCard;

import React, { useState, useEffect, useMemo } from "react";
import Image from 'next/image';

// Définition de l'interface pour les props
export interface DropdownProps {
    label: string;
    iconeUrl?: string;  // Ajout de l'URL de l'icône optionnelle
    className?: string;  // Ajout de la classe CSS optionnelle
    options: { key: string; value: string }[]; // Ajout des options avec les propriétés nécessaires
    iconSize?: { width: string; height: string }; // Ajout de la taille de l'icône optionnelle
}

export default function DropDown(props: DropdownProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    // Assurer que 'options' est bien un tableau d'objets et qu'il y a des données valides
    const options = useMemo(() => {
        return Array.isArray(props.options) ? props.options : [];
    }, [props.options]);

    // Mise à jour du selectedOption chaque fois que props.options change
    useEffect(() => {
        if (options.length > 0) {
            setSelectedOption(options[0].value); // Par défaut, on sélectionne la première option
        }
    }, [options]);

    // Vérification dans le rendu pour s'assurer que l'option existe avant d'y accéder
    return (
        <label className={props.className}>
            {props.label}
            {props.iconeUrl && (
                <Image
                    src={props.iconeUrl}
                    alt="icon"
                    width={parseInt(props.iconSize?.width || "16", 10)}
                    height={parseInt(props.iconSize?.height || "16", 10)}
                />
            )}
            <select
                name="selectedOption"
                value={selectedOption ?? ""}
                onChange={(e) => setSelectedOption(e.target.value)} // Mettre à jour la sélection
            >
                {options.length === 0 ? (
                    <option value="" disabled>Aucune option disponible</option>
                ) : (
                    options.map((option) => (
                        option && option.key && option.value ? (
                            <option key={option.key} value={option.value}>
                                {option.value}
                            </option>
                        ) : (
                            <option key="empty" value="" disabled>Option invalide</option> // Cas où l'option est mal formée
                        )
                    ))
                )}
            </select>
        </label>
    );
}

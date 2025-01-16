import { PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
// Import des librairies tierces
import React from "react";
import { PlasmicComponent } from '@plasmicapp/loader-react';

interface DropDownSelectorProps {
  // Define the props for DropDownSelector here
}

const DropDownSelector: React.FC<DropDownSelectorProps> = (props) => {
  return (
    <PlasmicComponent component="Select" />
  );
}

export default DropDownSelector;

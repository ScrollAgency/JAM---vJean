import * as React from "react";
import CountrySelector from "./CountrySelector";

function PhoneSelector() {
  return (
    <main
      role="main"
      className="flex flex-col text-base font-medium text-black max-w-[147px]"
    >
      <CountrySelector />
    </main>
  );
}

export default PhoneSelector;

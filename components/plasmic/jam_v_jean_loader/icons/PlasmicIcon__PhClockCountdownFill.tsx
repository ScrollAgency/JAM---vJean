// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhClockCountdownFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhClockCountdownFillIcon(props: PhClockCountdownFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.306 7.525a.941.941 0 111.882 0 .941.941 0 01-1.882 0zm-.94-1.88a.94.94 0 100-1.882.94.94 0 000 1.881zm2.246 4.389a.628.628 0 00-.676.573A6.908 6.908 0 119.46 3.136a.63.63 0 10-.104-1.255 8.162 8.162 0 108.832 8.832.627.627 0 00-.576-.68zM10.035 4.39a5.644 5.644 0 11-5.644 5.644 5.65 5.65 0 015.644-5.644zm-.627 5.644a.627.627 0 00.627.627h3.763a.628.628 0 000-1.254h-3.136V6.27a.627.627 0 10-1.254 0v3.763zm3.136-6.271a.94.94 0 100-1.882.94.94 0 000 1.882z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhClockCountdownFillIcon;
/* prettier-ignore-end */

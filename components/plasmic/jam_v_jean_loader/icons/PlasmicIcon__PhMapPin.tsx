// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhMapPinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhMapPinIcon(props: PhMapPinIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6 3a1.875 1.875 0 100 3.75A1.875 1.875 0 006 3zm0 3a1.125 1.125 0 110-2.25A1.125 1.125 0 016 6zM6 .75a4.13 4.13 0 00-4.125 4.125c0 1.472.68 3.032 1.969 4.512.579.668 1.23 1.27 1.943 1.795a.375.375 0 00.43 0 11.917 11.917 0 001.94-1.795c1.286-1.48 1.968-3.04 1.968-4.512A4.13 4.13 0 006 .75zm0 9.656c-.775-.61-3.375-2.847-3.375-5.531a3.375 3.375 0 016.75 0c0 2.683-2.6 4.922-3.375 5.531z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhMapPinIcon;
/* prettier-ignore-end */

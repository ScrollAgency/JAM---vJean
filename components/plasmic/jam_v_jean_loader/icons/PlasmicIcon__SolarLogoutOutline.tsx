// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SolarLogoutOutlineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SolarLogoutOutlineIcon(props: SolarLogoutOutlineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11 2.98a.687.687 0 010 1.374 6.646 6.646 0 100 13.292.688.688 0 010 1.375 8.02 8.02 0 110-16.042z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.098 8.736a.687.687 0 01.971-.972l2.75 2.75a.688.688 0 010 .972l-2.75 2.75a.687.687 0 11-.971-.972l1.576-1.576H9.167a.687.687 0 110-1.376h7.507l-1.576-1.576z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SolarLogoutOutlineIcon;
/* prettier-ignore-end */

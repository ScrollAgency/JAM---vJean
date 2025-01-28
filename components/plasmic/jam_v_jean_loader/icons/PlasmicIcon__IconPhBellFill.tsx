// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhBellFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhBellFillIcon(props: IconPhBellFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.595 12.37c-.39-.671-.97-2.573-.97-5.057a5.625 5.625 0 10-11.25 0c0 2.484-.58 4.386-.971 5.058a1.125 1.125 0 00.971 1.691h2.87a2.812 2.812 0 005.51 0h2.87a1.125 1.125 0 00.97-1.691zM9 15.189a1.687 1.687 0 01-1.59-1.126h3.18A1.688 1.688 0 019 15.188z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhBellFillIcon;
/* prettier-ignore-end */

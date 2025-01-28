// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PictogramIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PictogramIcon(props: PictogramIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 95 115"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M51.484 111.212l-33.62-33.62c-16.494-16.494-16.494-43.235 0-59.728v0c16.493-16.494 43.234-16.494 59.727 0v0c16.494 16.493 16.494 43.234 0 59.727L57.934 97.25 34.58 73.894a8.136 8.136 0 010-11.506v0a8.136 8.136 0 0111.506 0l5.103 5.103 10.856 10.856"
        }
        stroke={"currentColor"}
        strokeWidth={"9.451"}
      ></path>
    </svg>
  );
}

export default PictogramIcon;
/* prettier-ignore-end */

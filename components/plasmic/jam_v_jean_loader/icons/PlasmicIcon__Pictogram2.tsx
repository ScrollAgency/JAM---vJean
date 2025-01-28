// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Pictogram2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Pictogram2Icon(props: Pictogram2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.302 47.989L7.843 33.53C.75 26.437.75 14.937 7.843 7.843v0C14.937.75 26.437.75 33.53 7.843v0c7.093 7.094 7.093 18.594 0 25.687l-8.454 8.454L15.032 31.94a3.499 3.499 0 010-4.949v0a3.499 3.499 0 014.948 0l2.195 2.195 4.67 4.67"
        }
        stroke={"currentColor"}
        strokeWidth={"4.064"}
      ></path>
    </svg>
  );
}

export default Pictogram2Icon;
/* prettier-ignore-end */

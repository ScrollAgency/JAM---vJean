// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M35.266 11.016V24.25c0 6.492-5.263 11.755-11.755 11.755v0c-6.492 0-11.755-5.263-11.755-11.755v0c0-6.492 5.262-11.755 11.755-11.755h7.738v9.193a2.264 2.264 0 01-2.265 2.264v0a2.265 2.265 0 01-2.265-2.264v-6.283"
        }
        stroke={"currentColor"}
        strokeWidth={"2.63"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */

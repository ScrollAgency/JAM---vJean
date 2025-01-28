// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhClock2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhClock2Icon(props: IconPhClock2IconProps) {
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
          "M6 1.125a4.875 4.875 0 100 9.75 4.875 4.875 0 000-9.75zm0 9a4.125 4.125 0 110-8.25 4.125 4.125 0 010 8.25zM9 6a.375.375 0 01-.375.375H6A.375.375 0 015.625 6V3.375a.375.375 0 11.75 0v2.25h2.25A.375.375 0 019 6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhClock2Icon;
/* prettier-ignore-end */

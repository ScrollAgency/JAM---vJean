// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhBriefcase2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhBriefcase2Icon(props: IconPhBriefcase2IconProps) {
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
          "M10.125 2.625H8.25V2.25a1.125 1.125 0 00-1.125-1.125h-2.25A1.125 1.125 0 003.75 2.25v.375H1.875a.75.75 0 00-.75.75v6a.75.75 0 00.75.75h8.25a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75zM4.5 2.25a.375.375 0 01.375-.375h2.25a.375.375 0 01.375.375v.375h-3V2.25zm5.625 1.125v1.95a8.625 8.625 0 01-8.25 0v-1.95h8.25zm0 6h-8.25V6.171a9.384 9.384 0 008.25 0v3.204zM4.875 5.25a.375.375 0 01.375-.375h1.5a.375.375 0 010 .75h-1.5a.375.375 0 01-.375-.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhBriefcase2Icon;
/* prettier-ignore-end */

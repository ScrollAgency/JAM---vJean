// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhFileText2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhFileText2Icon(props: IconPhFileText2IconProps) {
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
          "M10.015 3.86L7.39 1.235a.375.375 0 00-.265-.11h-4.5a.75.75 0 00-.75.75v8.25a.75.75 0 00.75.75h6.75a.75.75 0 00.75-.75v-6a.376.376 0 00-.11-.265zM7.5 2.405L8.845 3.75H7.5V2.405zm1.875 7.72h-6.75v-8.25H6.75v2.25a.375.375 0 00.375.375h2.25v5.625zm-1.5-3.75a.375.375 0 01-.375.375h-3a.375.375 0 110-.75h3a.375.375 0 01.375.375zm0 1.5a.375.375 0 01-.375.375h-3a.375.375 0 110-.75h3a.375.375 0 01.375.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhFileText2Icon;
/* prettier-ignore-end */

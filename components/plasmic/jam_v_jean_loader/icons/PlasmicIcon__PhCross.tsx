// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCrossIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCrossIcon(props: PhCrossIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.918 6.45h-3.583V2.868A1.433 1.433 0 0012.9 1.434h-2.866A1.433 1.433 0 008.6 2.867v3.584H5.018a1.433 1.433 0 00-1.434 1.433v2.867a1.434 1.434 0 001.434 1.433H8.6v7.884a1.434 1.434 0 001.434 1.433h2.867a1.434 1.434 0 001.433-1.433v-7.884h3.583a1.433 1.433 0 001.434-1.433V7.884a1.433 1.433 0 00-1.434-1.433zm0 4.3h-4.3a.717.717 0 00-.716.717v8.601h-2.867v-8.6a.717.717 0 00-.717-.717h-4.3V7.884h4.3a.717.717 0 00.717-.717v-4.3h2.867v4.3a.717.717 0 00.716.717h4.3v2.867z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhCrossIcon;
/* prettier-ignore-end */

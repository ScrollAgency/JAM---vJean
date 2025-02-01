// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhClockCountdown2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhClockCountdown2Icon(
  props: IconPhClockCountdown2IconProps
) {
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
          "M10.875 6.406a4.88 4.88 0 11-5.28-5.281.376.376 0 11.06.75 4.13 4.13 0 104.47 4.47.376.376 0 01.75.06zm-5.25-3.031V6A.375.375 0 006 6.375h2.625a.375.375 0 000-.75h-2.25v-2.25a.375.375 0 10-.75 0zM7.5 2.25a.562.562 0 100-1.125.562.562 0 000 1.125zm1.688 1.125a.562.562 0 100-1.125.562.562 0 000 1.125zm1.124 1.688a.562.562 0 100-1.125.562.562 0 000 1.124z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhClockCountdown2Icon;
/* prettier-ignore-end */

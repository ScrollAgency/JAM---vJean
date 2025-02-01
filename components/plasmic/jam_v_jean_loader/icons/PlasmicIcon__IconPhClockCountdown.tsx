// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhClockCountdownIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhClockCountdownIcon(props: IconPhClockCountdownIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.125 10.677a8.135 8.135 0 11-8.802-8.802.627.627 0 01.104 1.25 6.884 6.884 0 107.448 7.448.627.627 0 111.25.104zm-8.75-5.052V10a.625.625 0 00.625.625h4.375a.624.624 0 100-1.25h-3.75v-3.75a.625.625 0 10-1.25 0zM12.5 3.75a.937.937 0 100-1.874.937.937 0 000 1.874zm2.813 1.875a.937.937 0 100-1.874.937.937 0 000 1.874zm1.874 2.813a.937.937 0 100-1.875.937.937 0 000 1.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhClockCountdownIcon;
/* prettier-ignore-end */

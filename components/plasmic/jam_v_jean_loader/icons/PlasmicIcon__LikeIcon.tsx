// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LikeIconIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LikeIconIcon(props: LikeIconIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.688 3.75c-1.936 0-3.631.832-4.688 2.24-1.057-1.408-2.752-2.24-4.688-2.24A5.82 5.82 0 001.5 9.563c0 6.562 9.73 11.874 10.145 12.093a.75.75 0 00.71 0c.415-.22 10.145-5.531 10.145-12.093a5.819 5.819 0 00-5.813-5.813zM12 20.137c-1.712-.997-9-5.541-9-10.575A4.318 4.318 0 017.313 5.25c1.823 0 3.354.971 3.993 2.531a.75.75 0 001.388 0c.64-1.563 2.17-2.531 3.993-2.531A4.318 4.318 0 0121 9.563c0 5.025-7.29 9.576-9 10.574z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LikeIconIcon;
/* prettier-ignore-end */

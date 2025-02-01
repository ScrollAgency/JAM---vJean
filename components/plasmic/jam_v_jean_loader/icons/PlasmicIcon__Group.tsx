// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 9.156h18.501m-7.023 8.155l1.172-1.93a15.101 15.101 0 015.096-5.084l1.35-.816a.378.378 0 00-.002-.648l-1.277-.762a15.104 15.104 0 01-5.192-5.17L11.478 1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.888"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */

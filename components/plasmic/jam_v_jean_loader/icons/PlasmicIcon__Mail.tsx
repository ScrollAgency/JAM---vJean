// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailIcon(props: MailIconProps) {
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
          "M18.333 5c0-.917-.75-1.667-1.666-1.667H3.333c-.916 0-1.666.75-1.666 1.667m16.666 0v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5m16.666 0L10 10.833 1.667 5"
        }
        stroke={"currentColor"}
        strokeWidth={"1.667"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MailIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhCaretDoubleLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhCaretDoubleLeftIcon(props: PhCaretDoubleLeftIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.512 11.326a.45.45 0 01-.317.765.449.449 0 01-.316-.131L6.4 7.482a.448.448 0 010-.634l4.48-4.478a.448.448 0 11.633.634L7.35 7.165l4.162 4.161zm-8.64-4.161l4.162-4.161A.448.448 0 006.4 2.37L1.922 6.848a.448.448 0 000 .634L6.4 11.96a.448.448 0 00.634-.634L2.872 7.165z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhCaretDoubleLeftIcon;
/* prettier-ignore-end */

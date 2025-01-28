// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhClockIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhClockIcon(props: IconPhClockIconProps) {
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
          "M10 1.875A8.125 8.125 0 1018.125 10 8.133 8.133 0 0010 1.875zm0 15A6.875 6.875 0 1116.875 10 6.883 6.883 0 0110 16.875zM15 10a.624.624 0 01-.625.625H10A.625.625 0 019.375 10V5.625a.625.625 0 011.25 0v3.75h3.75A.625.625 0 0115 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhClockIcon;
/* prettier-ignore-end */

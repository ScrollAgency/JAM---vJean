// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhMapPinIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhMapPinIcon(props: IconPhMapPinIconProps) {
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
          "M10 5a3.125 3.125 0 100 6.25A3.125 3.125 0 0010 5zm0 5a1.875 1.875 0 110-3.75A1.875 1.875 0 0110 10zm0-8.75a6.883 6.883 0 00-6.875 6.875c0 2.453 1.134 5.053 3.281 7.52a19.859 19.859 0 003.239 2.992.625.625 0 00.717 0 19.858 19.858 0 003.232-2.992c2.144-2.467 3.281-5.067 3.281-7.52A6.883 6.883 0 0010 1.25zm0 16.094c-1.291-1.016-5.625-4.746-5.625-9.219a5.625 5.625 0 0111.25 0c0 4.471-4.334 8.203-5.625 9.219z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhMapPinIcon;
/* prettier-ignore-end */

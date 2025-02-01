// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconsIcon(props: IconsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.396 2.69a.52.52 0 00-.72 0L4.604 6.65a.488.488 0 000 .7l4.072 3.96a.52.52 0 00.72 0 .485.485 0 000-.7L5.684 7l3.712-3.61a.485.485 0 000-.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconsIcon;
/* prettier-ignore-end */

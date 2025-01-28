// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhCoinsLight2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhCoinsLight2Icon(props: IconPhCoinsLight2IconProps) {
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
          "M10.526 4.866c-.521-.284-1.223-.488-1.995-.584v-.345c0-.568-.449-1.082-1.265-1.45C6.523 2.154 5.54 1.97 4.5 1.97s-2.023.184-2.766.519C.918 2.855.47 3.369.47 3.938v1.874c0 .569.449 1.083 1.265 1.45.492.222 1.088.375 1.735.456v.345c0 .568.449 1.082 1.265 1.45.743.334 1.725.518 2.766.518 1.04 0 2.023-.184 2.766-.519.815-.367 1.265-.881 1.265-1.45V6.188c0-.5-.357-.969-1.005-1.322zm-.269.494c.46.25.712.546.712.827 0 .666-1.425 1.407-3.469 1.407a7.83 7.83 0 01-.994-.063c.26-.07.514-.16.76-.269.815-.367 1.265-.881 1.265-1.45v-.964c.675.09 1.28.269 1.726.512zM5.07 7.2a8.315 8.315 0 01-1.304-.013 7.483 7.483 0 01-.485-.06v-1.31a8.43 8.43 0 002.438 0v1.307a7.46 7.46 0 01-.642.073L5.07 7.2zm2.899-2.236v.848c0 .448-.645.929-1.688 1.196V5.712a5.39 5.39 0 00.985-.325c.252-.11.488-.252.703-.423zM4.5 2.53c2.044 0 3.469.741 3.469 1.406 0 .666-1.425 1.407-3.469 1.407-2.044 0-3.469-.741-3.469-1.407 0-.665 1.425-1.406 3.469-1.406zM1.031 5.812v-.848c.215.17.451.313.703.421.317.14.647.249.985.325v1.296C1.676 6.741 1.03 6.26 1.03 5.812zm3 2.25v-.294a8.606 8.606 0 001.016-.004c.22.08.444.145.672.197v1.297C4.676 8.991 4.03 8.51 4.03 8.063zm2.25 1.313V8.067a8.345 8.345 0 002.438.001v1.307a7.969 7.969 0 01-2.438 0zm3-.117V7.962a5.39 5.39 0 00.985-.325c.252-.109.488-.25.703-.422v.848c0 .447-.645.928-1.688 1.195z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhCoinsLight2Icon;
/* prettier-ignore-end */

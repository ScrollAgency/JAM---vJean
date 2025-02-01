// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPhUsersThreeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPhUsersThreeIcon(props: IconPhUsersThreeIconProps) {
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
          "M19.125 11.75a.625.625 0 01-.875-.125A4.03 4.03 0 0015 10a.625.625 0 010-1.25 1.875 1.875 0 10-1.816-2.344.625.625 0 11-1.21-.312 3.125 3.125 0 115.135 3.086c.85.368 1.589.952 2.143 1.694a.623.623 0 01-.127.876zm-4.21 4.813a.626.626 0 11-1.08.625 4.453 4.453 0 00-7.67 0 .625.625 0 11-1.08-.625 5.63 5.63 0 012.635-2.338 3.75 3.75 0 114.56 0 5.63 5.63 0 012.636 2.338zM10 13.75a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5.625 9.375A.625.625 0 005 8.75a1.875 1.875 0 111.816-2.344.625.625 0 101.21-.312A3.125 3.125 0 102.892 9.18 5.308 5.308 0 00.75 10.874a.626.626 0 001 .751A4.03 4.03 0 015 10a.625.625 0 00.625-.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconPhUsersThreeIcon;
/* prettier-ignore-end */

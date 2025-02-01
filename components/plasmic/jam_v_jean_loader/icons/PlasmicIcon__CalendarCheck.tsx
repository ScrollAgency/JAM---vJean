// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarCheckIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarCheckIcon(props: CalendarCheckIconProps) {
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
          "M16.25 2.5h-1.875v-.625a.625.625 0 10-1.25 0V2.5h-6.25v-.625a.625.625 0 00-1.25 0V2.5H3.75A1.25 1.25 0 002.5 3.75v12.5a1.25 1.25 0 001.25 1.25h12.5a1.25 1.25 0 001.25-1.25V3.75a1.25 1.25 0 00-1.25-1.25zm-2.995 7.942l-3.75 3.75a.626.626 0 01-.885 0l-1.875-1.875a.625.625 0 01.885-.884l1.433 1.433 3.307-3.308a.626.626 0 01.885.884zM3.75 6.25v-2.5h1.875v.625a.625.625 0 001.25 0V3.75h6.25v.625a.625.625 0 101.25 0V3.75h1.875v2.5H3.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalendarCheckIcon;
/* prettier-ignore-end */

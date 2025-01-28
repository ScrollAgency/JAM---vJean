// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector5Icon(props: Vector5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.994 2.857a1.429 1.429 0 100-2.857 1.429 1.429 0 000 2.857zm0-2.143a.714.714 0 110 1.429.714.714 0 010-1.429zm2.857 5a.357.357 0 01-.357.357c-1.576 0-2.364-.795-2.996-1.433-.123-.124-.24-.242-.357-.35l-.6 1.378 1.66 1.186a.357.357 0 01.15.29v2.5a.357.357 0 11-.714 0V7.328L3.25 6.336l-1.5 3.45a.357.357 0 01-.655-.286l2.414-5.552c-.415-.073-.934.054-1.549.383-.49.27-.948.597-1.365.972a.357.357 0 01-.488-.52c.111-.105 2.754-2.555 4.407-1.12.17.148.334.312.49.472.624.628 1.212 1.222 2.49 1.222a.357.357 0 01.357.357z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector5Icon;
/* prettier-ignore-end */

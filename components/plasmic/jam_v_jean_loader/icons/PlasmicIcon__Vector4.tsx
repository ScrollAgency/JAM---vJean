// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.607 2.48a1.258 1.258 0 001.155-.766 1.23 1.23 0 00-.271-1.35 1.253 1.253 0 00-1.362-.27 1.232 1.232 0 00-.406 2.022c.235.233.553.363.884.363zm0-1.772a.539.539 0 01.495.328.527.527 0 01-.116.58.537.537 0 01-.915-.376.53.53 0 01.157-.376c.1-.1.237-.156.38-.156zm1.607 4.25c-.353 0-.698.105-.992.3a1.757 1.757 0 00-.27 2.725 1.79 1.79 0 001.946.383c.326-.134.605-.361.801-.652a1.76 1.76 0 00-.222-2.237 1.793 1.793 0 00-1.263-.518zm0 2.834a1.078 1.078 0 01-.99-.656 1.054 1.054 0 01.233-1.158 1.074 1.074 0 011.829.752c0 .281-.113.552-.314.751-.201.2-.474.311-.758.311zM1.786 4.96a1.8 1.8 0 00-.992.298 1.757 1.757 0 00-.27 2.725 1.79 1.79 0 001.945.384c.326-.134.605-.361.801-.652a1.76 1.76 0 00-.222-2.237 1.787 1.787 0 00-1.262-.518zm0 2.833a1.078 1.078 0 01-.99-.656 1.054 1.054 0 01.232-1.158 1.074 1.074 0 011.83.752 1.07 1.07 0 01-1.072 1.062zM7.857 4.25H6.071a.36.36 0 01-.252-.103L4.643 2.98l-.924.916 1.534 1.52a.354.354 0 01.104.251v2.125A.353.353 0 015 8.146a.359.359 0 01-.357-.354V5.814L2.962 4.147a.354.354 0 010-.501L4.39 2.229a.357.357 0 01.506 0l1.323 1.313h1.638a.359.359 0 01.357.354.359.359 0 01-.357.354z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */

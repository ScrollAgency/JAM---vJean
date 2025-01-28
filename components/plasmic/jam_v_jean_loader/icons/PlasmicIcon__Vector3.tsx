// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector3Icon(props: Vector3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.333 0H2.667c-.354 0-.693.14-.943.387-.25.248-.39.585-.39.935v5.95c0 .176.07.344.195.468A.67.67 0 002 7.934h1a.67.67 0 00.471-.194.658.658 0 00.196-.467v-.661h2.666v.66A.67.67 0 007 7.934h1a.67.67 0 00.471-.193.658.658 0 00.196-.467v-5.95c0-.351-.14-.688-.39-.936A1.339 1.339 0 007.332 0zM2 5.95V3.636h6V5.95H2zm0-3.967h6v.992H2v-.992zM2.667.661h4.666a.67.67 0 01.472.194.658.658 0 01.195.467H2c0-.175.07-.343.195-.467A.67.67 0 012.667.66zM3 7.273H2v-.661h1v.66zm4 0v-.661h1v.66H7zm-3-2.48a.493.493 0 01-.309.459.504.504 0 01-.681-.362.492.492 0 01.212-.509.503.503 0 01.632.062.496.496 0 01.146.35zm3 0a.493.493 0 01-.309.459.504.504 0 01-.681-.362.492.492 0 01.212-.509.503.503 0 01.632.062.496.496 0 01.146.35zm3-2.81v.992a.33.33 0 01-.333.33.335.335 0 01-.334-.33v-.992a.33.33 0 01.334-.33.335.335 0 01.333.33zm-9.333 0v.992a.335.335 0 01-.667 0v-.992a.335.335 0 01.667 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */

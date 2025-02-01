// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GearIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GearIcon(props: GearIconProps) {
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
          "M16.875 10.169a6.127 6.127 0 000-.338l1.166-1.456a.625.625 0 00.115-.552 8.41 8.41 0 00-.85-2.05.626.626 0 00-.469-.307l-1.853-.207a6.204 6.204 0 00-.234-.234l-.219-1.858a.626.626 0 00-.308-.469 8.382 8.382 0 00-2.05-.848.625.625 0 00-.552.116L10.17 3.125h-.34L8.375 1.962a.625.625 0 00-.552-.116 8.407 8.407 0 00-2.05.85.625.625 0 00-.307.469L5.259 5.02c-.08.078-.159.156-.234.234l-1.858.214a.625.625 0 00-.469.308 8.415 8.415 0 00-.849 2.05.625.625 0 00.117.552L3.125 9.83v.338l-1.163 1.456a.625.625 0 00-.116.552c.192.718.477 1.407.85 2.05a.624.624 0 00.469.307l1.853.207c.078.08.156.159.234.234l.217 1.858a.625.625 0 00.308.469 8.415 8.415 0 002.05.849.626.626 0 00.552-.117l1.452-1.159c.113.003.225.003.338 0l1.456 1.166a.626.626 0 00.552.115 8.379 8.379 0 002.05-.85.625.625 0 00.307-.469l.207-1.853c.08-.077.159-.155.234-.234l1.858-.219a.626.626 0 00.469-.308 8.414 8.414 0 00.849-2.05.626.626 0 00-.117-.552l-1.159-1.452zM10 13.125a3.125 3.125 0 110-6.25 3.125 3.125 0 010 6.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GearIcon;
/* prettier-ignore-end */

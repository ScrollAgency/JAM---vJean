// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AddressBookIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AddressBookIcon(props: AddressBookIconProps) {
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
          "M12.5 8.75a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm5-5.625v13.75a1.25 1.25 0 01-1.25 1.25H5a1.25 1.25 0 01-1.25-1.25V15H2.5a.625.625 0 110-1.25h1.25v-3.125H2.5a.625.625 0 110-1.25h1.25V6.25H2.5A.625.625 0 012.5 5h1.25V3.125A1.25 1.25 0 015 1.875h11.25a1.25 1.25 0 011.25 1.25zm-2.625 9.625a5.302 5.302 0 00-2.14-1.694 3.125 3.125 0 10-4.215 0 5.3 5.3 0 00-2.145 1.694.625.625 0 001 .75 4.062 4.062 0 016.5 0 .625.625 0 101-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AddressBookIcon;
/* prettier-ignore-end */

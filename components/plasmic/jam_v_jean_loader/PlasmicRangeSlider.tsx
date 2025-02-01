// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: f7DE9y7qp46fyCw5nuY8f9
// Component: A_oPZntya_MT

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { BaseSlider } from "@plasmicpkgs/react-aria/skinny/registerSlider";
import Label from "../../Label"; // plasmic-import: 8NOvOzjn7daE/component
import { BaseSliderOutput } from "@plasmicpkgs/react-aria/skinny/registerSliderOutput";
import { BaseSliderTrack } from "@plasmicpkgs/react-aria/skinny/registerSliderTrack";
import SliderThumb from "../../SliderThumb"; // plasmic-import: ej9AGXLKyZe-/component
import Description from "../../Description"; // plasmic-import: W4kacxF_-Ybc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: f7DE9y7qp46fyCw5nuY8f9/projectcss
import sty from "./PlasmicRangeSlider.module.css"; // plasmic-import: A_oPZntya_MT/css

createPlasmicElementProxy;

export type PlasmicRangeSlider__VariantMembers = {};
export type PlasmicRangeSlider__VariantsArgs = {};
type VariantPropType = keyof PlasmicRangeSlider__VariantsArgs;
export const PlasmicRangeSlider__VariantProps = new Array<VariantPropType>();

export type PlasmicRangeSlider__ArgsType = {
  showLabel?: boolean;
  showOutputText?: boolean;
  showDescription?: boolean;
  outputText?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  filled?: boolean;
  initialValue?: any;
  disabled?: boolean;
  onChange?: (val: any) => void;
  ariaLabel?: string;
  label?: React.ReactNode;
  thumbs?: React.ReactNode;
};
type ArgPropType = keyof PlasmicRangeSlider__ArgsType;
export const PlasmicRangeSlider__ArgProps = new Array<ArgPropType>(
  "showLabel",
  "showOutputText",
  "showDescription",
  "outputText",
  "minValue",
  "maxValue",
  "step",
  "filled",
  "initialValue",
  "disabled",
  "onChange",
  "ariaLabel",
  "label",
  "thumbs"
);

export type PlasmicRangeSlider__OverridesType = {
  ariaRangeSlider?: Flex__<typeof BaseSlider>;
  label?: Flex__<typeof Label>;
  ariaSliderOutput?: Flex__<typeof BaseSliderOutput>;
  text?: Flex__<"div">;
  background?: Flex__<"div">;
  ariaSliderTrack?: Flex__<typeof BaseSliderTrack>;
  foreground?: Flex__<"div">;
  description?: Flex__<typeof Description>;
};

export interface DefaultRangeSliderProps {
  showLabel?: boolean;
  showOutputText?: boolean;
  showDescription?: boolean;
  outputText?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  filled?: boolean;
  initialValue?: any;
  disabled?: boolean;
  onChange?: (val: any) => void;
  ariaLabel?: string;
  label?: React.ReactNode;
  thumbs?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRangeSlider__RenderFunc(props: {
  variants: PlasmicRangeSlider__VariantsArgs;
  args: PlasmicRangeSlider__ArgsType;
  overrides: PlasmicRangeSlider__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showOutputText: true,
          showDescription: false,
          filled: true,
          initialValue: [25, 75]
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "ariaRangeSlider.value",
        type: "readonly",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["initialValue"],

        onChangeProp: "onChange"
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    disabled: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseSlider
      data-plasmic-name={"ariaRangeSlider"}
      data-plasmic-override={overrides.ariaRangeSlider}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaRangeSlider
      )}
      defaultValue={args.initialValue}
      isDisabled={args.disabled}
      maxValue={args.maxValue}
      minValue={args.minValue}
      onChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaRangeSlider", "value"]).apply(
          null,
          eventArgs
        );
      }}
      orientation={"horizontal"}
      plasmicUpdateVariant={updateVariant}
      step={args.step}
      value={generateStateValueProp($state, ["ariaRangeSlider", "value"])}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__q56CG)}
      >
        {$props.showLabel ? (
          <Label
            data-plasmic-name={"label"}
            data-plasmic-override={overrides.label}
            className={classNames("__wab_instance", sty.label)}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__peoNq
                  )}
                >
                  {"Label"}
                </div>
              ),
              value: args.label
            })}
          </Label>
        ) : null}
        {$props.showOutputText ? (
          <BaseSliderOutput
            data-plasmic-name={"ariaSliderOutput"}
            data-plasmic-override={overrides.ariaSliderOutput}
            className={classNames("__wab_instance", sty.ariaSliderOutput)}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return (
                      $props.outputText ??
                      $state.ariaRangeSlider.value?.join(",")
                    );
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </BaseSliderOutput>
        ) : null}
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__gAE0)}>
        <div
          data-plasmic-name={"background"}
          data-plasmic-override={overrides.background}
          className={classNames(projectcss.all, sty.background)}
        >
          <BaseSliderTrack
            data-plasmic-name={"ariaSliderTrack"}
            data-plasmic-override={overrides.ariaSliderTrack}
            className={classNames("__wab_instance", sty.ariaSliderTrack)}
            progressBar={
              $props.filled ? (
                <div
                  data-plasmic-name={"foreground"}
                  data-plasmic-override={overrides.foreground}
                  className={classNames(projectcss.all, sty.foreground)}
                />
              ) : null
            }
          >
            {renderPlasmicSlot({
              defaultContents: (
                <SliderThumb
                  className={classNames(
                    "__wab_instance",
                    sty.sliderThumb__hka27
                  )}
                />
              ),

              value: args.thumbs
            })}
          </BaseSliderTrack>
        </div>
      </div>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        />
      ) : null}
    </BaseSlider>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaRangeSlider: [
    "ariaRangeSlider",
    "label",
    "ariaSliderOutput",
    "text",
    "background",
    "ariaSliderTrack",
    "foreground",
    "description"
  ],
  label: ["label"],
  ariaSliderOutput: ["ariaSliderOutput", "text"],
  text: ["text"],
  background: ["background", "ariaSliderTrack", "foreground"],
  ariaSliderTrack: ["ariaSliderTrack", "foreground"],
  foreground: ["foreground"],
  description: ["description"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaRangeSlider: typeof BaseSlider;
  label: typeof Label;
  ariaSliderOutput: typeof BaseSliderOutput;
  text: "div";
  background: "div";
  ariaSliderTrack: typeof BaseSliderTrack;
  foreground: "div";
  description: typeof Description;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRangeSlider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRangeSlider__VariantsArgs;
    args?: PlasmicRangeSlider__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRangeSlider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRangeSlider__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRangeSlider__ArgProps,
          internalVariantPropNames: PlasmicRangeSlider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRangeSlider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaRangeSlider") {
    func.displayName = "PlasmicRangeSlider";
  } else {
    func.displayName = `PlasmicRangeSlider.${nodeName}`;
  }
  return func;
}

export const PlasmicRangeSlider = Object.assign(
  // Top-level PlasmicRangeSlider renders the root element
  makeNodeComponent("ariaRangeSlider"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    ariaSliderOutput: makeNodeComponent("ariaSliderOutput"),
    text: makeNodeComponent("text"),
    background: makeNodeComponent("background"),
    ariaSliderTrack: makeNodeComponent("ariaSliderTrack"),
    foreground: makeNodeComponent("foreground"),
    description: makeNodeComponent("description"),

    // Metadata about props expected for PlasmicRangeSlider
    internalVariantProps: PlasmicRangeSlider__VariantProps,
    internalArgProps: PlasmicRangeSlider__ArgProps
  }
);

export default PlasmicRangeSlider;
/* prettier-ignore-end */

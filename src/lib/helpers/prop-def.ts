import { ReactNode } from "react";
import { Responsive } from "./breakpoints";

type BooleanPropDef = { type: "boolean"; default?: boolean; required?: boolean };
type StringPropDef = { type: "string"; default?: string; required?: boolean };
type StringOrNumberPropDef = {
  type: "string | number";
  default?: string | number;
  required?: boolean;
};
type ReactNodePropDef = { type: "ReactNode"; default?: ReactNode; required?: boolean };
type EnumPropDef<T> = { type: "enum"; values: readonly T[]; default?: T; required?: boolean };

type RegularPropDef<T> = BooleanPropDef | StringPropDef | StringOrNumberPropDef | ReactNodePropDef | EnumPropDef<T>;
type ResponsivePropDef<T = any> = RegularPropDef<T> & { responsive: true }; // eslint-disable-line
export type PropDef<T = any> = RegularPropDef<T> | ResponsivePropDef; // eslint-disable-line

type GetPropDefType<Def> = Def extends BooleanPropDef
  ? Def extends ResponsivePropDef
    ? Responsive<boolean>
    : boolean
  : Def extends StringPropDef
  ? Def extends ResponsivePropDef
    ? Responsive<string>
    : string
  : Def extends StringOrNumberPropDef
  ? Def extends ResponsivePropDef
    ? Responsive<string | number>
    : string | number
  : Def extends ReactNodePropDef
  ? Def extends ResponsivePropDef
    ? Responsive<ReactNode>
    : ReactNode
  : Def extends EnumPropDef<infer Type>
  ? Def extends ResponsivePropDef<infer Type>
    ? Responsive<Type>
    : Type
  : never;

export type GetPropDefTypes<P> = {
  [K in keyof P]?: GetPropDefType<P[K]>;
};

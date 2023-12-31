import type { PropDef } from "@/lib/helpers/prop-def";

const sizes = ["1", "2", "3", "4"] as const;
const displayValues = ["none", "block"] as const;

export const containerPropDefs = {
  size: { type: "enum", values: sizes, default: "4", responsive: true },
  display: { type: "enum", values: displayValues, default: undefined, responsive: true },
} satisfies {
  size: PropDef<(typeof sizes)[number]>;
  display: PropDef<(typeof displayValues)[number]>;
};

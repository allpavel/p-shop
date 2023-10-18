export type Breakpoints = "initial" | "xs" | "sm" | "md" | "lg" | "xl";
export type Responsive<T> = T | Partial<Record<Breakpoints, T>>;

export function withBreakpoints(
  value: Responsive<string | boolean | undefined>,
  classPrefix = "",
  valueMap?: Record<string, string>
) {
  const classes: string[] = [];

  if (typeof value === "object") {
    const breakpoints = Object.keys(value) as Breakpoints[];
    for (const breakpoint of breakpoints) {
      if (breakpoint in value) {
        const str = value[breakpoint]?.toString();
        const isNegative = str?.startsWith("-");
        const delimeter = classPrefix === "" ? "" : "-";
        const prefix = isNegative ? `-${classPrefix}` : classPrefix;
        const matchedValue = isNegative ? str?.substring(1) : str;

        if (matchedValue === undefined) {
          continue;
        }

        const suffix = valueMap?.[matchedValue] ?? matchedValue;

        const className =
          breakpoint === "initial" ? `${prefix}${delimeter}${suffix}` : `${breakpoint}:${prefix}${delimeter}${suffix}`;

        classes.push(className);
      }
    }
  }

  if (typeof value === "string") {
    const isNegative = value.startsWith("-");
    const delimeter = classPrefix === "" ? "" : "-";
    const prefix = isNegative ? `-${classPrefix}` : classPrefix;
    const matchedValue = isNegative ? value.substring(1) : value;
    const suffix = valueMap?.[matchedValue] ?? matchedValue;
    const className = `${prefix}${delimeter}${suffix}`;
    classes.push(className);
  }

  if (typeof value === "boolean") {
    const delimeter = classPrefix === "" ? "" : "-";
    const matchedValue = value.toString();
    const suffix = valueMap?.[matchedValue] ?? matchedValue;
    const className = `${classPrefix}${delimeter}${suffix}`;
    classes.push(className);
  }

  return classes.join(" ");
}

export function isBreakpointsObject<V extends string>(
  obj: Responsive<V | Omit<string, V>> | undefined
): obj is Record<Breakpoints, string> {
  return typeof obj === "object";
}

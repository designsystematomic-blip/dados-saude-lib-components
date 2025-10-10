import { useMemo } from "react";
import type { TextProps } from "./Text.types";
import toCapitalizeCase from "@lib/utils";

function Text({ content, variant, size, color, align, children }: TextProps) {
  const extraClasses = useMemo(() => {
    let classes = "";
    if (align) {
      classes += ` text${toCapitalizeCase(align)}`; // textLeft, textCenter, textRight
    }

    if (size) {
      classes += ` text${toCapitalizeCase(size)}`; // textSmall, textMedium, textLarge
    }

    if (variant) {
      classes += ` font${toCapitalizeCase(variant)}`; // fontPrimary, fontSecondary, fontTertiary
    }

    return classes;
  }, [variant, align]);

  return (
    <p
      className={`${extraClasses}`}
      style={{ color: color ? color : "inherit" }}
    >
      {content}
      {children}
    </p>
  );
}

export default Text;

import { useMemo } from "react";
import styles from "./Text.module.css";
import type { TextProps } from "./Text.types";
import toCapitalizeCase from "@lib/utils";

function Text({ content, variant, size, color, align }: TextProps) {
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
    </p>
  );
}

export default Text;

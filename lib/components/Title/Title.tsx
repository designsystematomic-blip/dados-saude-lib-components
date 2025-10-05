import { useMemo } from "react";
import type { TitleProps } from "./Title.types";
import toCapitalizeCase from "@lib/utils";

function Title({
  tag = "h2",
  weight,
  content,
  align,
  variant,
  color,
}: TitleProps) {
  const CustomTag = tag;

  const extraClasses = useMemo(() => {
    let classes = "";

    if (tag) {
      classes += ` ${tag}`; // h1, h2, h3, h4, h5, h6
    }

    if (weight) {
      classes += ` ${weight}`;
    }

    if (variant) {
      classes += ` font${toCapitalizeCase(variant)}`; // fontPrimary, fontSecondary, fontTertiary
    }

    if (align) {
      classes += ` text${toCapitalizeCase(align)}`; // textLeft, textCenter, textRight
    }
    return classes;
  }, [variant, align]);

  return (
    <CustomTag
      className={extraClasses}
      style={{ color: color ? color : "inherit" }}
    >
      {content}
    </CustomTag>
  );
}

export default Title;

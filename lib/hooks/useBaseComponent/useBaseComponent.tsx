import { BaseComponent } from "@lib/components/common.types";
import toCapitalizeCase from "@lib/utils";
import { useMemo } from "react";

function useBaseComponent({ fontFamily, textSize, textAlign, tag }: BaseComponent) {

	const extraClasses = useMemo(() => {
    let classes = "";
    if (textAlign) {
      classes += ` text${toCapitalizeCase(textAlign)}`; // textLeft, textCenter, textRight
    }

    if (textSize) {
      classes += ` text${toCapitalizeCase(textSize)}`; // textSmall, textMedium, textLarge
    }

    if (fontFamily) {
      classes += ` font${toCapitalizeCase(fontFamily)}`; // fontPrimary, fontSecondary, fontTertiary
    }

    if (tag) {
      classes += ` ${tag}`; // h1, h2, h3, h4, h5, h6
    }

    return classes;
  }, [fontFamily, textAlign, textSize, tag]);

	return { extraClasses };

}

export default useBaseComponent;
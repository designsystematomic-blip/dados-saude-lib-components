import { BaseComponent } from "@lib/components/common.types";
import toCapitalizeCase from "@lib/utils";
import { useMemo } from "react";

function useBaseComponent({ fontFamily, textSize, textAlign, tag, fontWeight }: BaseComponent) {

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

    if (fontWeight) {
      classes += ` font${toCapitalizeCase(fontWeight)}`; // fontLight, fontRegular, fontBold
    }

    return classes;
  }, [fontFamily, textAlign, textSize, tag, fontWeight]);

	return { extraClasses };

}

export default useBaseComponent;
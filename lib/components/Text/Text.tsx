import useBaseComponent from "@lib/hooks/useBaseComponent";
import type { TextProps } from "./Text.types";

function Text({ content, fontFamily = 'primary', textSize = 'medium', fontWeight = 'regular', textColor, textAlign, children }: TextProps) {
  
  const { extraClasses } = useBaseComponent({
    fontFamily,
    textAlign,
    textSize,
    fontWeight,
  })

  return (
    <p
      className={`${extraClasses}`}
      style={{ color: textColor ? textColor : "inherit" }}
    >
      {content}
      {children}
    </p>
  );
}

export default Text;

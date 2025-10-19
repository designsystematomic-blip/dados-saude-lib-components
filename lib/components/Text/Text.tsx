import type { TextProps } from "./Text.types";
import useBaseComponent from "@lib/hooks/useBaseComponent";

function Text({ content, fontFamily = 'primary', textSize = 'medium', textColor, textAlign, children }: TextProps) {
  
  const { extraClasses } = useBaseComponent({
    fontFamily,
    textAlign,
    textSize
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

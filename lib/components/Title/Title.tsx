import useBaseComponent from "@lib/hooks/useBaseComponent";
import type { TitleProps } from "./Title.types";

function Title({
  tag = "h2",
  content,
  textAlign,
  fontFamily,
  fontWeight,
  style
}: TitleProps) {
  const CustomTag = tag;

  const { extraClasses } = useBaseComponent({
    textAlign,
    fontFamily,
    fontWeight,
    tag
  });

  return (
    <CustomTag
      className={extraClasses}
      style={{ ...style }}
    >
      {content}
    </CustomTag>
  );
}

export default Title;

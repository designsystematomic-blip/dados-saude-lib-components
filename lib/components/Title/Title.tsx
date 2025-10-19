import type { TitleProps } from "./Title.types";
import useBaseComponent from "@lib/hooks/useBaseComponent";

function Title({
  tag = "h2",
  content,
  textAlign,
  fontFamily,
  fontWeight,
  color,
}: TitleProps) {
  const CustomTag = tag;

  const { extraClasses } = useBaseComponent({
    textAlign,
    fontFamily,
    fontWeight
  });

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

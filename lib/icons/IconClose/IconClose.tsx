import type { IconProps } from "../Icon.types";

const Close = ({ fillColor = "#000" }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.3334 8.54669L23.4534 6.66669L16 14.12L8.54669 6.66669L6.66669 8.54669L14.12 16L6.66669 23.4534L8.54669 25.3334L16 17.88L23.4534 25.3334L25.3334 23.4534L17.88 16L25.3334 8.54669Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default Close;

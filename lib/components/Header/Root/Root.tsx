import type { RootProps } from "./Root.types";

const Root = ({ children }: RootProps) => {
  return <div className="root">{children}</div>;
};

export default Root;

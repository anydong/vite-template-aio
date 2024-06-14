import { Icon, type IconProps } from "@iconify/react";
import type { FC } from "react";

const Iconify: FC<IconProps> = (props) => {
  return (
    <span role="img" className="anticon">
      <Icon {...props} />
    </span>
  );
};

export default Iconify;

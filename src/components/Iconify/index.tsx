import { Icon, IconProps } from "@iconify/react";
import { FC } from "react";

const Iconify: FC<IconProps> = (props) => {
  return (
    <span role="img" className="anticon">
      <Icon {...props} />
    </span>
  );
};

export default Iconify;

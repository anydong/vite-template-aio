import { Icon, IconProps } from '@iconify/react';
import { FC } from 'react';

import styles from './index.module.css';

const Iconify: FC<IconProps> = (props) => {
  return (
    <span role="img" className={styles.anticon}>
      <Icon {...props} />
    </span>
  );
};

export default Iconify;

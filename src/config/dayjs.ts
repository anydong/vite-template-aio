import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import "dayjs/locale/en";
import "dayjs/locale/zh-cn";

dayjs.extend(isBetween);

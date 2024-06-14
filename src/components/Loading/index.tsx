import type { FC } from "react";
import { useTranslation } from "react-i18next";

const Loading: FC = () => {
  const { t } = useTranslation();
  return <div>{t("common:Loading")}</div>;
};

export default Loading;

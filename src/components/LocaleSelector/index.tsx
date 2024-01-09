import type { SelectProps } from "antd";
import { Select } from "antd";
import i18next from "i18next";

const localeOptions: SelectProps["options"] = [
  { label: "简体中文", value: "zh-CN" },
  { label: "English", value: "en" },
];
const LocaleSelector = () => {
  const onSelectorChange: SelectProps["onChange"] = (value, options) => {
    i18next.changeLanguage(value).catch((e) => {
      console.error(e);
    });
    console.log(options);
  };
  return <Select className="min-w-24" value={i18next.language} options={localeOptions} onChange={onSelectorChange} />;
};

export default LocaleSelector;

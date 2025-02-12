/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "block-no-empty": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "theme",
          "source",
          "utility",
          "variant",
          "custom-variant",
          "apply",
          "reference",
          "config",
          "plugin",
        ],
      },
    ],
    "custom-property-pattern": "^(breakpoint-.+)$",
    "no-empty-source": null,
  },
};

/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  rules: {
    "block-no-empty": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "theme"],
      },
    ],
    "custom-property-pattern": "^(breakpoint-.+)$",
    "no-empty-source": null,
  },
};

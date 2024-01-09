export default {
  "**/*.js?(x)": (filenames) => filenames.map((filename) => `prettier --write --ignore-unknown '${filename}'`),
  "**/*.ts?(x)": (filenames) => filenames.map((filename) => `prettier --write --ignore-unknown '${filename}'`),
  "**/*.css": ["stylelint --fix"],

  "package.json": ["prettier --write --ignore-unknown"],
  "*.md": ["prettier --write --ignore-unknown"],
  "*.json": ["prettier --write --ignore-unknown"],
};

export default {
  "**/*.js?(x)": (filenames) => filenames.map((filename) => `biome format --write '${filename}'`),
  "**/*.ts?(x)": (filenames) => filenames.map((filename) => `biome format --write '${filename}'`),
  "**/*.css": ["stylelint --fix"],

  "package.json": ["biome format --write"],
  "*.md": ["biome format --write"],
  "*.json": ["biome format --write"],
};

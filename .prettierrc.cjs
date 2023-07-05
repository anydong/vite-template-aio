module.exports = {
  ...require('eslint-config-alloy/.prettierrc.js'),
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-packagejson'],
  importOrder: ['^@/(.*)$', '^antd/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderGroupNamespaceSpecifiers: true,
};

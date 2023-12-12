/** @type {import("prettier").Config} */
const config = {
  trailingComma: "all",
  tabWidth: 4,
  semi: true,
  singleQuote: false,
  useTabs: false,
  endOfLine: "auto",
  importOrderSeparation: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

module.exports = config;

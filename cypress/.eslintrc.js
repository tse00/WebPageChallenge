module.exports = {
  root: true,
  env: {
    "cypress/globals": true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["simple-import-sort", "cypress", "@typescript-eslint", "unicorn"],
  rules: {
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
  },
};

// .eslintrc.cjs
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // This must be the last item
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
        checkJS: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn", // Warn on 'any' type instead of error
    "prettier/prettier": [
      "warn", // Show Prettier issues as warnings
      {
        // Your Prettier rules
        arrowParens: "always",
        semi: true,
        trailingComma: "all",
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
};

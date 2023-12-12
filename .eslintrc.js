module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:import/typescript",
      "prettier",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: "module",
      project: ["./tsconfig.json"],
    },
    plugins: ["prettier", "react", "@typescript-eslint"],
    rules: {
      "react/react-in-jsx-scope": 0,
      "react/display-name": 0,
      "react/prop-types": 0,
      "import/prefer-default-export": 0,
      "react/require-default-props": 0,
      "react/forbid-prop-types": 0,
      "react/no-unused-prop-types": 0,
      "import/extensions": [
        "error",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "@typescript-eslint/no-use-before-define": "warn",
      "no-promise-executor-return": "warn",
      "no-nested-ternary": "warn",
      "@typescript-eslint/no-shadow": "warn",
      "react/no-unescaped-entities": 0,
      "@typescript-eslint/default-param-last": 0,
      "prefer-destructuring": "warn",
      "react/jsx-no-useless-fragment": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
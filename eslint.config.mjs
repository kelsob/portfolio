// eslint.config.mjs
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import babelParser from "@babel/eslint-parser";

export default [
  eslintConfigPrettier,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"],
        },
        requireConfigFile: false, // Allow parsing without a Babel config file
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "react/react-in-jsx-scope": "off",
    },
  },
];

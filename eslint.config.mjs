import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/react-in-jsx-scope": "off",
    },
  },
];

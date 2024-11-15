
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    rules: {
      "react/display-name": "off",
      semi: "error",
      "prefer-const": "error"
    }
  }
];
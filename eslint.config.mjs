import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
      "rules": {
        "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
        ],
        "quotes": [
          "warn",
          "double",
          { "avoidEscape": true, "allowTemplateLiterals": true }
        ],
        "arrow-parens": [
          "error",
          "always"
        ]
      }
    }
];
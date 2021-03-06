module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1,{"extensions": [".js", ".jsx", "ts", "tsx"]}],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "emotion/jsx-import": "error",
    "jsx-a11y/click-events-have-key-events": 0,
  },
  "plugins": ["prettier", "react-hooks", "emotion", "jest"]
}

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    // eslint
    "newline-before-return": "error",
    "no-console": "off",
    "import/prefer-default-export": ["off"],
    "no-fallthrough": "off",
    "no-restricted-syntax": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          ".storybook/**",
          "stories/**",
          "**/*/*.story.*",
          "**/*/*.stories.*",
          "**/__specs__/**",
          "**/*/*.spec.*",
          "**/__tests__/**",
          "**/*/*.test.*"
        ]
      }
    ],
    // @typescript-eslint
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-interface": "off",
    // prettier
    "prettier/prettier": [
      "warn",
      {
        semi: true,
        singleQuote: true,
        printWidth: 120,
        trailingComma: "all"
      }
    ],
    // react
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "react/jsx-one-expression-per-line": ["off"],
    "react/jsx-wrap-multilines": ["off"]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", "jsx", ".ts", ".tsx"],
        paths: ["src"]
      }
    }
  }
};

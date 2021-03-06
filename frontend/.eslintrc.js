module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier", "eslint-plugin-import-helpers" ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/prop-types": [2, { ignore: ['children'] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    'import-helpers/order-imports': [
      'warn',
      {
          newlinesBetween: 'always', // new line between groups
          groups: [
              'module',
              '/^~/',
              ['parent', 'sibling', 'index'],
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
      },
  ],
  "prefer-destructuring": ["error", {
    "array": true,
    "object": true
  }, {
    "enforceForRenamedProperties": false
  }]
  },
  settings: { /** navegar apartir do src */
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
};

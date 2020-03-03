module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "linebreak-style": "off",
    "comma-dangle": ["error", "only-multiline"],
    "arrow-parens": [2, "as-needed", { requireForBlockBody: true }],
    "no-unused-expressions": "off",
    quotes: [2, "double", { avoidEscape: true }]
  }
};

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'eslint-plugin-import-helpers'
    ],
    "rules": {
      "import/prefer-default-export": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'import-helpers/order-imports': [
          'warn',
          {
              newlinesBetween: 'always',
              groups: [
                  '/^react/',
                  'module',
                  '/^@shared/',
                  ['parent', 'sibling', 'index'],
              ],
              alphabetize: { order: 'asc', ignoreCase: true },
          },
      ],
    }
};

export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "rules": {
        "no-unused-vars": "warn"
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    parser: "@babel/eslint-parser",
}
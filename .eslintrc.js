module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["standard-with-typescript", "eslint:recommended", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "@typescript-eslint/quotes": ["warn", "double"],
        "@typescript-eslint/indent": "off",
        "no-tabs": "off",
        "@typescript-eslint/comma-dangle": ["warn", "always-multiline"],
        "@typescript-eslint/semi": ["warn", "always"],
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/space-before-function-paren": "off",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};

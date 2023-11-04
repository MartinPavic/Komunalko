module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["standard-with-typescript", "plugin:react/recommended"],
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
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/indent": "off",
        "no-tabs": 0,
        "@typescript-eslint/comma-dangle": ["warning", "always-multiline"],
    },
};

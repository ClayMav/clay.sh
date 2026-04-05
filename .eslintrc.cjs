module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
        project: ['./tsconfig.json'],
    },
    plugins: ['prettier', 'react', '@typescript-eslint'],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/display-name': 0,
        'react/prop-types': 0,
        'react/no-unescaped-entities': 0,
        'react/require-default-props': 0,
        'react/jsx-no-useless-fragment': 'warn',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/no-shadow': 'warn',
        'no-nested-ternary': 'warn',
        'prefer-destructuring': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}

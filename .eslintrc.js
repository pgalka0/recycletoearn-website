module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': 0,
    'linebreak-style': 0,
    'no-new': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [2, { code: 125 }],
    'arrow-parens': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': [
      0,
      {
        singleQuote: true,
        semi: true,
      },
    ],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  },
};

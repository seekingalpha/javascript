# eslint-config-seekingalpha-react

This package includes the shareable ESLint config used by [SeekingAlpha](https://seekingalpha.com/).

## Installation

Install ESLint and all [Peer Dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/):

    npm install eslint@9.39.1 eslint-plugin-jsx-a11y@6.10.2 eslint-plugin-react@7.37.5 eslint-plugin-react-hooks@7.0.1 --save-dev

Install SeekingAlpha shareable ESLint:

    npm install eslint-config-seekingalpha-react@latest --save-dev

## Usage

This shareable config includes all rules from following plugins:

- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

Simply [use](https://eslint.org/docs/latest/extend/shareable-configs) the eslint.config.js in your project with the configuration:

```javascript
import reactConfig from 'eslint-config-seekingalpha-react';

export default [
  {
    plugins: {
      ...reactConfig.plugins,
    },
    rules: {
      ...reactConfig.rules,
    },
  },
];
```

## License

MIT © [SeekingAlpha](https://seekingalpha.com/)

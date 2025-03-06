// eslint-disable-next-line n/file-extension-in-import, import/extensions
import layout from './layout-and-formatting.js';
// eslint-disable-next-line n/file-extension-in-import, import/extensions
import problems from './possible-problems.js';
// eslint-disable-next-line n/file-extension-in-import, import/extensions
import suggestions from './suggestions.js';

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default {
  rules: {
    ...layout.rules,
    ...problems.rules,
    ...suggestions.rules,
  },
};

import layout from './layout-and-formatting.js';
import problems from './possible-problems.js';
import suggestions from './suggestions.js';

export default {
  rules: {
    ...layout.rules,
    ...problems.rules,
    ...suggestions.rules,
  },
};

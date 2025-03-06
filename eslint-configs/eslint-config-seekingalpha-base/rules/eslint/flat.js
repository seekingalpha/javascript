import layout from './layout-and-formatting';
import problems from './possible-problems';
import suggestions from './suggestions';

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default {
  rules: {
    ...layout.rules,
    ...problems.rules,
    ...suggestions.rules,
  },
};

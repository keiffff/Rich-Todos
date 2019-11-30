const registerRequireContextHook = require("babel-plugin-require-context-hook/register");
registerRequireContextHook();

jest.mock("@storybook/addon-info", () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {}
}));

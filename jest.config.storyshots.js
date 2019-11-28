import baseConfig from './jest.config';

module.exports = {
  ...baseConfig,
  testMatch: ['<rootDir>/**/test.storyshots.(js|jsx|ts|tsx)'],
};

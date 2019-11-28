module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/.jest/transform.js"
  },
  testMatch: ["<rootDir>/**/?(*.)(spec|test).(ts|js)?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/.jest/setup.js"]
};

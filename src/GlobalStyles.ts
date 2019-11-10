import { injectGlobal } from 'emotion';

export const makeGlobalStyles = () => {
  injectGlobal({
    body: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica, Neue, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmooting: 'grayscale',
      margin: 0,
    },
    code: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, Courier New monospace',
    },
  });
};

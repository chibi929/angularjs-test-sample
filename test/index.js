// https://github.com/deepsweet/istanbul-instrumenter-loader
// test/index.js を参考に作成

const testContexts = require.context('./', true, /\.ts$/);
testContexts.keys().forEach(testContexts);

const srcContexts = require.context('../src/', true, /^(?!.*\.d\.ts).*(?=\.ts).*$/);
srcContexts.keys().forEach(srcContexts);

// This file will be the only entry point for Karma.

module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/test/'],
  coverageReporters: ['html', 'json', 'lcov', 'text'],
  setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['test-umd'],
};

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true, // Shows detailed test results
  testMatch: ['**/__tests__/**/*.test.ts'], // Path to test files
  moduleNameMapper: {
    // Add module aliases for path mapping, if required
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  globals: {
    'ts-jest': {
      isolatedModules: true, // Faster testing for larger TypeScript projects
    },
  },
};

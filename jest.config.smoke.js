'use strict';
module.exports = {
  verbose: true,
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  modulePaths: ['<rootDir>'],
  roots: ['<rootDir>'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Smoke Testing',
        outputDirectory: './reports/',
        outputName: './junit.xml',
        usePathForSuiteName: 'true',
        includeConsoleOutput: 'true',
      },
    ],
  ],
  testMatch: [
    //'**/*.ts?(x)',
    '**/smoke-tests/**/*.ts',
  ],
  testTimeout: 60000,
};

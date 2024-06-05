import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 60000,
  roots: ['<rootDir>'],
  coverageDirectory: 'test-results',
  coverageReporters: [
    'text',
    'text-summary',
    'clover',
    ["lcov", { "projectRoot": "./" }],
  ],
  testMatch: ["**/test/**/*.(test|spec).ts?(x)"],
  transform: {'^.+\\.[jt]s?$': 'ts-jest'},
  reporters: [
    'default'
    // ['jest-junit', {
    //   outputDirectory: 'test-results',
    //   outputName: 'test-report.xml',
    // }],
  ]
  // testResultsProcessor: 'jest-sonar-reporter',
};
export default config;

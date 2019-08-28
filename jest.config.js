module.exports = {
  automock: false,

  clearMocks: true,

  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],

  coverageDirectory: 'coverage',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  setupFiles: ['<rootDir>/test/shim.js'],

  setupFilesAfterEnv: ['<rootDir>/test/enzume.ts'],

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testMatch: ['**/__tests__/**/*.(ts|tsx|js|jsx)', '**/?(*.)+(spec|test).(ts|tsx|js|jsx)'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx|js|jsx)$', '^.+\\.module\\.(css|sass|scss)$'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.css$': 'jest-transform-css',
    '^.+\\.(jpg|jpeg|png|gif|webp)$': 'jest-transform-file',
  },

  snapshotSerializers: ['enzyme-to-json/serializer'],
};

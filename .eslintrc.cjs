/* -*- Mode: javascript -*- */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  globals: {
    browser: true, // puppeteer
    context: true, // puppeteer
    jestPuppeteer: true, // puppeteer
    page: true // puppeteer
  },
  overrides: [{
    extends: [
      'plugin:jest/recommended',
      'plugin:jest/style'
    ],
    files: ['js/test/**'],
    plugins: ['jest'],
    rules: {},
    settings: {
      jest: {
        version: require('jest/package.json').version
      }
    }
  }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'log-filenames'
  ],
  root: true,
  rules: {
    'array-bracket-spacing': [ 'error', 'always', {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: false
    }],
    'arrow-parens': [ 'error', 'as-needed' ],
    'consistent-return': 'error',
    'getter-return': 'error',
    indent: [ 'error', 2, {
      CallExpression: { arguments: 'first' }
    }],
    'jest/consistent-test-it': [ 'error', { fn: 'it' }],
    'jest/prefer-expect-assertions': 'error',
    'max-len': [ 'error', {
      code: 120,
      ignoreUrls: true
    }],
    'newline-per-chained-call': [ 'error', {
      ignoreChainWithDepth: 3
    }],
    'no-console': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-imports': 'error',
    'no-labels': [ 'error', {
      allowLoop: true,
      allowSwitch: true
    }],
    'no-plusplus': [ 'error', {
      allowForLoopAfterthoughts: true
    }],
    'no-setter-return': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': [ 'error', {
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      vars: 'all'
    }],
    'require-yield': 'error',
    'sort-imports': [ 'error', {
      allowSeparatedGroups: true
    }],
    'sort-keys': [ 'error', 'asc', {
      allowLineSeparatedGroups: true,
      caseSensitive: true,
      minKeys: 2,
      natural: false
    }],
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }],
    'space-unary-ops': [ 'error', {
      nonwords: false,
      overrides: {
        '!': true
      },
      words: true
    }],
    'template-curly-spacing': [ 'error', 'always' ]
  }
}

// build.lib.test.js
import libAsCJS from '../dist/cjs/index.js'
const libAsESM = require('../dist/esm/index.js')

test('should build library with cjs file', () => {
  expect(libAsCJS).toBeDefined()
})

test('should build library with esm file', () => {
  expect(libAsESM).toBeDefined()
})

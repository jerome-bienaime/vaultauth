// build.lib.test.js
import libAsCJS from '../dist/lib/cjs/index.js'
const libAsESM = require('../dist/lib/esm/index.js')

test('should build library with cjs file', () => {
  expect(libAsCJS).toBeDefined()
})

test('should build library with esm file', () => {
  expect(libAsESM).toBeDefined()
})

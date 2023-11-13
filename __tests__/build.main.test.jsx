/**
 * @jest-environment jsdom
 */
/* eslint-disable */

import {
  lib,
  VaultAuthComponent,
} from '../dist/index-esm.js'

test('should build library', () => {
  expect(lib).toBeDefined()
})

test('should build component', () => {
  expect(VaultAuthComponent).toBeDefined()
})

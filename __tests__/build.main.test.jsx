/**
 * @jest-environment jsdom
 */

/* eslint-disable */
import {
  lib,
  VaultAuthComponent,
} from '../dist/esm/index.js'

test('should build library', () => {
  expect(lib).toBeDefined()
})

test('should build component', () => {
  expect(VaultAuthComponent).toBeDefined()
})

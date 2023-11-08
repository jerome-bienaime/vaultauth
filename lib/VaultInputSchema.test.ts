// VaultInputSchema.test.ts

import VaultInputSchema from './VaultInputSchema'
import { generateMock } from '@anatine/zod-mock'

test('should mock schema', () => {
  const mock = generateMock(VaultInputSchema)
  const result = VaultInputSchema.safeParse(mock)

  if (!result.success) {
    console.error(result.error)
  }
  expect(result.success).toBe(true)
})

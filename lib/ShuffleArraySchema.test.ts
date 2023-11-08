// ShuffleArraySchema.test.ts

import ShuffleArraySchema from './ShuffleArraySchema'
import { generateMock } from '@anatine/zod-mock'

test('should mock schema', () => {
  const mock = generateMock(ShuffleArraySchema)
  const result =
    ShuffleArraySchema.safeParse(mock)

  if (!result.success) {
    console.error(result.error)
  }
  expect(result.success).toBe(true)
})

// VaultInputSchema.ts
import { z } from 'zod'

const StringTuple = z.tuple([
  z.string(),
  z.string(),
  z.string(),
  z.string(),
])

const NumberTuple = z.tuple([
  z.number(),
  z.number(),
  z.number(),
  z.number(),
])

const VaultInputSchema = z.union(
  [StringTuple, NumberTuple],
  {
    errorMap: () => ({
      message:
        'input must be either 4 strings or 4 numbers',
    }),
  }
)
export default VaultInputSchema

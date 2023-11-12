// ShuffleArraySchema.ts
import { z } from 'zod'

const Letter = z.string().length(1)

const StringTuple = z.tuple([
  Letter,
  Letter,
  Letter,
])

const Digit = z.number().min(1).max(9)

const NumberTuple = z.tuple([Digit, Digit, Digit])

// A Row can be either a tuple of 3 strings
// or a tuple of 4 numbers
const RowSchema = z.union([
  StringTuple,
  NumberTuple,
])

// A Row is a tuple of 3 Rows
const ShuffleArraySchema = z.tuple([
  RowSchema,
  RowSchema,
  RowSchema,
])
export default ShuffleArraySchema

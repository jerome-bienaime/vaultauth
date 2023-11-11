// ShuffleArraySchema.ts
import { z } from 'zod'

const StringTuple = z.tuple([
  z.string(),
  z.string(),
  z.string(),
])

const NumberTuple = z.tuple([
  z.number(),
  z.number(),
  z.number(),
])

// A Row can be either a tuple of 3 strings
// or a tuple of 4 numbers
const RowSchema = z.union([
  StringTuple,
  NumberTuple,
])

// A Row is a tuple of 3 Rows
const Row = z.tuple([
  RowSchema,
  RowSchema,
  RowSchema,
])
export default Row

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

// A Column can be either a tuple of 3 strings
// or a tuple of 4 numbers
const ColumnSchema = z.union([
  StringTuple,
  NumberTuple,
])

// A Row is a tuple of 3 columns
const Row = z.tuple([
  ColumnSchema,
  ColumnSchema,
  ColumnSchema,
])
export default Row

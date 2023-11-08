// ShuffleArray.d.ts
// A shuffle array is a 3x3 matrix
import type Case from './Case'

//
export type Column = [Case, Case, Case]

//
type Row = [Column, Column, Column]
export default Row

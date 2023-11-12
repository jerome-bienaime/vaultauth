// ShuffleArray.d.ts
// A shuffle array is a 3x3 matrix
import type Case from './Case'

export type Row = [Case, Case, Case]

type ShuffleArray = [Row, Row, Row]
export default ShuffleArray

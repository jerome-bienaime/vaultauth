import React from 'react'
import type {
  ShuffleArray,
  Row,
} from '../../lib'
import RowComponent from './Row'

interface GridProps {
  shuffleArray: ShuffleArray
}

export default function Grid(props: GridProps) {
  return props.shuffleArray.map(
    (Rows: Row, index: number) => (
      <RowComponent
        key={index}
        Rows={Rows}
      />
    )
  )
}

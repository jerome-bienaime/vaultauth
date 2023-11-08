import React from 'react'
import type {
  ShuffleArray,
  Column,
} from '../../lib'
import ColumnComponent from './Column'

interface GridProps {
  shuffleArray: ShuffleArray
}

export default function Grid(props: GridProps) {
  return props.shuffleArray.map(
    (columns: Column, index: number) => (
      <ColumnComponent
        key={index}
        columns={columns}
      />
    )
  )
}

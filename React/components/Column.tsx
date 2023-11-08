import React from 'react'
import {
  type Case as CaseType,
  type Column,
} from '../../lib'
import CaseComponent from './Case'

interface ColumnProps {
  columns: Column
}

export default function Column(
  props: ColumnProps
) {
  return props.columns.map((column: CaseType) => (
    <CaseComponent case={column} key={column} />
  ))
}

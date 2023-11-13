/** @jsxImportSource theme-ui */

import React from 'react'
import {
  type Case as CaseType,
  type Row,
} from '../../lib'
import CaseComponent from './Case'
import { Grid } from 'theme-ui'

interface RowProps {
  Row: Row
}

export default function Row(props: RowProps) {
  return (
    <Grid gap={2} columns={3}>
      {props.Row.map((row: CaseType) => (
        <CaseComponent case={row} key={row} />
      ))}
    </Grid>
  )
}

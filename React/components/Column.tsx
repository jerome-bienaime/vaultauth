/** @jsxImportSource theme-ui */

import React from 'react'
import {
  type Case as CaseType,
  type Column,
} from '../../lib'
import CaseComponent from './Case'
import { Grid } from 'theme-ui'
import {
  Types,
  getTabsterAttribute,
} from 'tabster'

interface ColumnProps {
  columns: Column
}

export default function Column(
  props: ColumnProps
) {
  return (
    <Grid
      gap={2}
      columns={3}
      {...getTabsterAttribute({
        groupper: {
          tabbability:
            Types.GroupperTabbabilities
              .LimitedTrapFocus,
        },
      })}
      tabIndex={0}
      title='Column of cases'
    >
      {props.columns.map((column: CaseType) => (
        <CaseComponent
          case={column}
          key={column}
        />
      ))}
    </Grid>
  )
}

/** @jsxImportSource theme-ui */
import {
  type Case as CaseType,
  type Row,
} from '../../lib'
import CaseComponent from './Case'
import { Grid } from 'theme-ui'

interface RowProps {
  Row: Row
  onCaseClick: (value: CaseType) => any
}

export default function Row(props: RowProps) {
  return (
    <Grid gap={2} columns={3}>
      {props.Row.map((item: CaseType) => (
        <CaseComponent
          case={item}
          onClick={props.onCaseClick}
          key={item}
        />
      ))}
    </Grid>
  )
}

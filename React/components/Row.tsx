/** @jsxImportSource theme-ui */
import {
  Case,
  type Case as CaseType,
  type Row,
} from '../../lib'
import CaseComponent from './Case'
import { Grid } from 'theme-ui'

interface ClickableCase {
  case: Case
  onClick: (value: Case) => void
}

interface RowProps {
  Row: ClickableCase[]
}

export default function Row(props: RowProps) {
  return (
    <Grid gap={2} columns={3}>
      {props.Row.map(
        (item: {
          case: Case
          onClick: (value: Case) => void
        }) => (
          <CaseComponent
            case={item.case}
            onClick={item.onClick}
            key={item.case}
          />
        )
      )}
    </Grid>
  )
}

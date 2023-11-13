/** @jsxImportSource theme-ui */
import {
  Container,
  Grid as GridUI,
} from 'theme-ui'
import type {
  ShuffleArray,
  Row,
  Case,
} from '../../lib'
import RowComponent from './Row'
import {
  getTabsterAttribute,
  Types,
} from 'tabster'

interface ClickableCase {
  case: Case
  onClick: (value: Case) => void
}

type ClickableRow = [
  ClickableCase,
  ClickableCase,
  ClickableCase,
]
interface GridProps {
  shuffleArray: ClickableRow[]
}

export default function GridComponent(
  props: GridProps
) {
  return (
    <Container>
      <GridUI
        gap={2}
        {...getTabsterAttribute({
          groupper: {
            tabbability:
              Types.GroupperTabbabilities
                .LimitedTrapFocus,
          },
        })}
        tabIndex={0}
        title='Grid'
      >
        {props.shuffleArray.map(
          (rows: ClickableRow, index: number) => (
            <RowComponent
              key={index}
              Row={rows}
            />
          )
        )}
      </GridUI>
    </Container>
  )
}

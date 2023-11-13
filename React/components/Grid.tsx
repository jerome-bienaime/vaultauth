/** @jsxImportSource theme-ui */
import {
  Container,
  Grid as GridUI,
} from 'theme-ui'
import type { ShuffleArray, Row } from '../../lib'
import RowComponent from './Row'
import {
  getTabsterAttribute,
  Types,
} from 'tabster'

interface GridProps {
  shuffleArray: ShuffleArray
}

export default function GridComponent(props: GridProps) {
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
          (rows: Row, index: number) => (
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

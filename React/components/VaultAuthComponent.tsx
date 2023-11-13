/** @jsxImportSource theme-ui */
import {
  VaultInput,
  ShuffleArray,
  Case,
} from '../../lib'
import GridComponent from './Grid'
import VaultInputComponent from './VaultInput'

interface ClickableCase {
  case: Case
  onClick: (value: Case) => void
}

type ClickableRow = [
  ClickableCase,
  ClickableCase,
  ClickableCase,
]
interface VaultAuthComponentProps {
  shuffleArray: ClickableRow[]
  vaultPass: VaultInput
}

function VaultAuthComponent(
  props: VaultAuthComponentProps
) {
  return (
    <>
      <GridComponent
        shuffleArray={props.shuffleArray}
      />
      <VaultInputComponent
        guess={props.vaultPass}
      />
    </>
  )
}
export default VaultAuthComponent

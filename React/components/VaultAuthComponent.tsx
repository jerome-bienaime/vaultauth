/** @jsxImportSource theme-ui */
import {
  VaultInput,
  ShuffleArray,
  Case,
} from '../../lib'
import GridComponent from './Grid'
import VaultInputComponent from './VaultInput'

interface VaultAuthComponentProps {
  shuffleArray: ShuffleArray
  onCaseClick: (value: Case) => any
  vaultPass: VaultInput
}

function VaultAuthComponent(
  props: VaultAuthComponentProps
) {
  return (
    <>
      <GridComponent
        shuffleArray={props.shuffleArray}
        onCaseClick={props.onCaseClick}
      />
      <VaultInputComponent
        guess={props.vaultPass}
      />
    </>
  )
}
export default VaultAuthComponent

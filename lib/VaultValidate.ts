// VaultValidate.ts
import type Case from './Case'
import type ShuffleArray from './ShuffleArray'
import type VaultInput from './VaultInput'

interface VaultValidateProps {
  shuffleArray: ShuffleArray
  vaultPass: VaultInput
}

function compareToShuffleArray(
  passItem: Case,
  shuffleArray: ShuffleArray
): boolean {
  const rowArray = shuffleArray.find(
    (row: [Case, Case, Case]) =>
      row.includes(passItem)
  )

  return rowArray !== undefined
}

/** Is vaultPass data contained in shuffleArray?
 * User need to get every Case of VaultInput in the
 * ShuffleArray to be able to type his password.
 */
const VaultValidate = (
  props: VaultValidateProps
): boolean => {
  const countVault = props.vaultPass.filter(
    (vaultItem: Case) =>
      compareToShuffleArray(
        vaultItem,
        props.shuffleArray
      )
  )
  return (
    countVault.length === props.vaultPass.length
  )
}

export default VaultValidate

import React from 'react'
import {
  VaultInput,
  ShuffleArray,
} from '../../lib'
import GridComponent from './Grid'
import VaultInputComponent from './VaultInput'

interface VaultAuthComponentProps {
  shuffleArray: ShuffleArray
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

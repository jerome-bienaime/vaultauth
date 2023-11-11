/** @jsxImportSource theme-ui */
import React from 'react'
import {
  VaultInput,
  ShuffleArray,
} from '../../lib'
import GridComponent from './Grid'
import VaultInputComponent from './VaultInput'
import { ThemeUIProvider } from 'theme-ui'
import theme from './theme'

interface VaultAuthComponentProps {
  shuffleArray: ShuffleArray
  vaultPass: VaultInput
}

function VaultAuthComponent(
  props: VaultAuthComponentProps
) {
  return (
    <ThemeUIProvider theme={theme}>
      <GridComponent
        shuffleArray={props.shuffleArray}
      />
      <VaultInputComponent
        guess={props.vaultPass}
      />
    </ThemeUIProvider>
  )
}
export default VaultAuthComponent

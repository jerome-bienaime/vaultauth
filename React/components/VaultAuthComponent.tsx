/** @jsxImportSource theme-ui */
import React from 'react'
import {
  VaultInput,
  ShuffleArray,
  Case,
} from '../../lib'
import GridComponent from './Grid'
import VaultInputComponent from './VaultInput'
import { Grid } from 'theme-ui'

interface VaultAuthComponentProps {
  shuffleArray: ShuffleArray
  onCaseClick?: (value: Case) => any
  onDeleteClick?: () => any
  vaultPass: VaultInput
}

function VaultAuthComponent(
  props: VaultAuthComponentProps
) {
  const [password, setPassword] = React.useState<
    Case[]
  >([])
  function handleClick(value: Case) {
    if (props.onCaseClick) {
      props.onCaseClick(value)
    }

    if (password.length <= 4) {
      setPassword((current: Case[]) => [
        ...current,
        value,
      ])
    }
  }

  function handleCancelClick() {
    if (props.onDeleteClick) {
      props.onDeleteClick()
    }
    
    if (password.length) {
      setPassword((current: Case[]) =>
        current.slice(0, -1)
      )
    }
  }
  return (
    <Grid gap={2}>
      <GridComponent
        shuffleArray={props.shuffleArray}
        onCaseClick={handleClick}
      />
      <VaultInputComponent
        guess={props.vaultPass}
        current={password}
        onCancelClick={handleCancelClick}
      />
    </Grid>
  )
}
export default VaultAuthComponent

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
import _ from 'lodash'
import KeyboardHandler from './KeyboardHandler'

interface ComponentConfig {
  keypadAccess?: boolean
  submitButton?: boolean
}

interface VaultAuthComponentProps {
  shuffleArray: ShuffleArray
  onCaseClick?: (value: Case) => any
  onDeleteClick?: () => any
  vaultPass: VaultInput
  config?: ComponentConfig
}

function VaultAuthComponent(
  props: VaultAuthComponentProps
) {
  const [password, setPassword] = React.useState<
    Case[]
  >([])

  const config = Object.assign(
    {
      keypadAccess: false,
      submitButton: false
    },
    props.config || {}
  )

  const allowedKeys = _.flattenDeep(
    props.shuffleArray
  ).map((item) => item.toString())

  function handleCaseClick(value: Case) {
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
        onCaseClick={handleCaseClick}
      />
      <VaultInputComponent
        guess={props.vaultPass}
        current={password}
        onCancelClick={handleCancelClick}
      />
      {config.keypadAccess && (
        <KeyboardHandler
          allowedKeys={allowedKeys}
          deleteKeyEvent={handleCancelClick}
          handleKeyEvent={handleCaseClick}
        />
      )}
    </Grid>
  )
}
export default VaultAuthComponent

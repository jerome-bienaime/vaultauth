/** @jsxImportSource theme-ui */
import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5'
import { Case } from '../../lib'
import GridComponent from './Grid'
import VaultInputComponent from './VaultInput'
import { Button, Container, Grid } from 'theme-ui'
import _ from 'lodash'
import KeyboardHandler from './KeyboardHandler'
import { usePassword } from '../hooks'
import {
  handleCancelClick,
  handleCaseClick,
  handleSubmit,
} from '../handlers'
import { VaultAuthComponentProps } from './VaultAuthComponent.d'
import { createConfig } from '../config'

function VaultAuthComponent(
  props: VaultAuthComponentProps
) {
  const [password, setPassword] = usePassword()

  const config = createConfig({ ...props.config })

  const allowedKeys = _.flattenDeep(
    props.shuffleArray
  ).map((item) => item.toString())

  const onCaseClick = (value: Case) =>
    handleCaseClick({
      ...props,
      config,
      value,
      password,
      setPassword,
      handleSubmit,
    })

  const onCancelClick = () =>
    handleCancelClick({
      ...props,
      password,
      setPassword,
    })

  const onSubmitClick = () =>
    handleSubmit({
      ...props,
      password,
      config,
      fromButton: true,
    })

  return (
    <Container>
      <Grid gap={2}>
        <GridComponent
          shuffleArray={props.shuffleArray}
          onCaseClick={onCaseClick}
        />
        <VaultInputComponent
          guess={props.vaultPass}
          current={password}
          onCancelClick={onCancelClick}
        />
        {config.keypadAccess && (
          <KeyboardHandler
            allowedKeys={allowedKeys}
            deleteKeyEvent={onCancelClick}
            handleKeyEvent={onCaseClick}
          />
        )}

        {/* SubmitButtonComponent */}
        {config.submitButton && (
          <Button
            type='submit'
            onClick={onSubmitClick}
          >
            <IoArrowForwardCircleOutline />
          </Button>
        )}
      </Grid>
    </Container>
  )
}
export default VaultAuthComponent

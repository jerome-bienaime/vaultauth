/** @jsxImportSource theme-ui */
import { Case } from '../../lib'
import { createConfig } from '../config'
import {
  handleCancelClick,
  handleCaseClick,
  handleSubmit,
} from '../handlers'
import { usePassword } from '../hooks'
import GridComponent from './Grid'
import KeyboardHandler from './KeyboardHandler'
import SubmitButtonComponent from './SubmitButtonComponent'
import { VaultAuthComponentProps } from './VaultAuthComponent.d'
import VaultInputComponent from './VaultInput'
import _ from 'lodash'
import { Container, Grid } from 'theme-ui'

function VaultAuthComponent(
  props: VaultAuthComponentProps
) {
  const [password, setPassword] = usePassword()
  const config = createConfig({ ...props.config })
  const allowedKeys = _.flattenDeep(
    props.shuffleArray
  ).map((item) => `${item}`.toString())

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
          deleteButton={props.DeleteButton}
        />
        {config.keypadAccess && (
          <KeyboardHandler
            allowedKeys={allowedKeys}
            deleteKeyEvent={onCancelClick}
            handleKeyEvent={onCaseClick}
            submitKeyEvent={onSubmitClick}
          />
        )}

        {config.submitButton && (
          <SubmitButtonComponent
            component={props.SubmitButton}
            onSubmitClick={onSubmitClick}
          />
        )}
      </Grid>
    </Container>
  )
}
export default VaultAuthComponent

import { Case } from '../../lib'
import { ComponentConfig } from '../config'

interface handleSubmitProps {
  submitValue?: Case[]
  password: Case[]
  fromButton: boolean
  config: ComponentConfig
  onSubmit?: (value: Case[]) => any
}

export function handleSubmit(
  props: handleSubmitProps
) {
  if (
    props.config.submitButton &&
    !props.fromButton
  ) {
    return
  }
  if (props.onSubmit) {
    props.onSubmit(props.submitValue || props.password)
  }
}

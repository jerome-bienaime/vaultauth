import { Case } from '../../lib'
import { ComponentConfig } from '../config'

interface handleCaseClickProps {
  value: Case
  password: Case[]
  config: ComponentConfig
  setPassword: React.ComponentState
  onCaseClick?: (value: Case) => any
  handleSubmit: (handleSubmitProps: any) => any
  setErrors: React.ComponentState
}

export function handleCaseClick(
  props: handleCaseClickProps
) {
  if (props.onCaseClick) {
    props.onCaseClick(props.value)
  }
  if (props.password.length <= 4) {
    props.setPassword((current: Case[]) => [
      ...current,
      props.value,
    ])
  }
  if (props.password.length === 3) {
    props.handleSubmit({
      ...props,
      password: [...props.password, props.value],
    })
  }
}

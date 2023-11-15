import { Case } from '../../lib'
import { VaultInputSchema } from '../../lib'
import { ComponentConfig } from '../config'

interface handleSubmitProps {
  submitValue?: Case[]
  password: Case[]
  fromButton: boolean
  config: ComponentConfig
  onSubmit?: (value: Case[]) => any
  setErrors: React.ComponentState
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
    const validVaultPass =
      VaultInputSchema.safeParse(
        props.submitValue || props.password
      )
    if (!validVaultPass.success) {
      props.setErrors(
        validVaultPass.error.issues.map(
          (issue) => {
            return issue.message
          }
        )
      )
    } else {
      props.setErrors([])
    }
    props.onSubmit(
      props.submitValue || props.password
    )
  }
}

import { Case } from '../../lib'

interface handleCancelClickProps {
  onDeleteClick?: () => any
  password: Case[]
  setPassword: React.ComponentState
}

export function handleCancelClick(
  props: handleCancelClickProps
) {
  if (props.onDeleteClick) {
    props.onDeleteClick()
  }
  if (props.password.length) {
    props.setPassword((current: Case[]) =>
      current.slice(0, -1)
    )
  }
}

/** @jsxImportSource theme-ui */
import { Case } from '../../lib'
import { Button } from 'theme-ui'

interface CaseProps {
  case: Case
  onClick: (
    value: Case
  ) => void
}
export default function CaseComponent(
  props: CaseProps
) {
  return (
    <Button
      className='case'
      type='button'
      variant='primary'
      onClick={() => props.onClick(props.case)}
    >
      {props.case.toString()}
    </Button>
  )
}

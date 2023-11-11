/** @jsxImportSource theme-ui */
import React from 'react'
import { Case } from '../../lib'
import { Button } from 'theme-ui'

interface CaseProps {
  case: Case
}
export default function CaseComponent(
  props: CaseProps
) {
  return (
    <Button
      className='case'
      type='button'
      variant='primary'
    >
      {props.case.toString()}
    </Button>
  )
}

import React from 'react'
import { Case } from '../../lib'

interface CaseProps {
  case: Case
}
export default function CaseComponent(
  props: CaseProps
) {
  return (
    <button className='case' type="button">
      {props.case.toString()}
    </button>
  )
}

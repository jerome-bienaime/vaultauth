import React from 'react'
import { Case } from '../../lib'

interface CaseProps {
  case: Case
}
export default function Case(props: CaseProps) {
  return <div className='case'>{props.case.toString()}</div>
}

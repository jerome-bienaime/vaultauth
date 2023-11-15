import { Case } from '../../lib'
import React from 'react'

export default function usePassword() {
  const state = React.useState<Case[]>([])

  return state
}

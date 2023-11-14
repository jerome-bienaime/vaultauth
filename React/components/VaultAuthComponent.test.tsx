/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import VaultAuthComponent from './VaultAuthComponent'
import React from 'react'
import { Case, ShuffleArray } from '../../lib'


it('renders Vault Auth Component', () => {
  function click(value: Case) {
    console.log(value)
  }

  const shuffleArray:ShuffleArray = [
    [
      0,1,2
    ],
    [
      3,4,5
    ],
    [
      6,7,8
    ],
  ]
  const renderer = render(
    <VaultAuthComponent
      shuffleArray={shuffleArray}
      onCaseClick={click}
      vaultPass={[1, 2, 3, 4]}
    />
  )
  const result = screen.getAllByText('1')
  expect(result).toBeDefined()
})

/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import VaultAuthComponent from './VaultAuthComponent'
import React from 'react'

it('renders Vault Auth Component', () => {
  const renderer = render(
    <VaultAuthComponent
      shuffleArray={[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]}
      vaultPass={[1, 2, 3, 4]}
    />
  )
  const result = screen.getAllByText('1')
  expect(result).toBeDefined()
})

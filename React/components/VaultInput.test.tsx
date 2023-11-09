/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import VaultInput from './VaultInput'
import React from 'react'

it('renders Vault Input Component', () => {
  const renderer = render(
    <VaultInput
      guess={[1, 2, 3, 4]}
    />
  )
  const result = screen.getAllByText('1')
  expect(result).toBeDefined()
})

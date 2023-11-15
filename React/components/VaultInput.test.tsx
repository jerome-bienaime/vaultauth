/**
 * @jest-environment jsdom
 */
import VaultInput from './VaultInput'
import {
  screen,
  render,
} from '@testing-library/react'
import React from 'react'

it('renders Vault Input Component', () => {
  const { container } = render(
    <VaultInput guess={[1, 2, 3, 4]} />
  )
  const result = container.querySelector(
    `input[name="guess-0"]`
  )
  expect(result).toBeDefined()
})

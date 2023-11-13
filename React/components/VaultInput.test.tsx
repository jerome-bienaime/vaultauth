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
  const { container } = render(
    <VaultInput guess={[1, 2, 3, 4]} />
  )
  const result = container.querySelector(
    `input[name="guess-0"]`
  )
  expect(result).toBeDefined()
})

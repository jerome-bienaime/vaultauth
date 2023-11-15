/**
 * @jest-environment jsdom
 */

/* eslint-disable */
import { VaultAuthComponent } from '../dist/component/index.js'
import {
  screen,
  render,
} from '@testing-library/react'
import React from 'react'

it('should build component', () => {
  expect(VaultAuthComponent).toBeDefined()
})

it('renders Vault Auth Component', () => {
  function click(value) {
    console.log(value)
  }

  const shuffleArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]

  render(
    <VaultAuthComponent
      shuffleArray={shuffleArray}
      onCaseClick={click}
      vaultPass={[1, 2, 3, 4]}
    />
  )
  const result = screen.getAllByText('1')
  expect(result).toBeDefined()
})

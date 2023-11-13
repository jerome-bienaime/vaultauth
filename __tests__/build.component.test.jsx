/**
 * @jest-environment jsdom
 */
/* eslint-disable */
import {
  screen,
  render,
} from '@testing-library/react'
import { VaultAuthComponent } from '../dist/component/index.js'
import React from 'react'

it('should build component', () => {
  expect(VaultAuthComponent).toBeDefined()
})

it('renders Vault Auth Component', () => {

  function click(value) {
    console.log(value)
  }

  const shuffleArray = [
    [
      { case: 0, onClick: click },
      { case: 1, onClick: click },
      { case: 2, onClick: click },
    ],
    [
      { case: 3, onClick: click },
      { case: 4, onClick: click },
      { case: 5, onClick: click },
    ],
    [
      { case: 6, onClick: click },
      { case: 7, onClick: click },
      { case: 8, onClick: click },
    ],
  ]
  const renderer = render(
    <VaultAuthComponent
      shuffleArray={shuffleArray}
      vaultPass={[1, 2, 3, 4]}
    />
  )
  const result = screen.getAllByText('1')
  expect(result).toBeDefined()
})

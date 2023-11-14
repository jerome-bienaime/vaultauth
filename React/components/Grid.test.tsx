/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import Grid from './Grid'
import React from 'react'
import { Case, ShuffleArray } from '../../lib'

it('renders a Grid of Rows', () => {
  function click(value: Case) {
    console.log(value)
  }

  const shuffleArray: ShuffleArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ]
  const renderer = render(
    <Grid
      shuffleArray={shuffleArray}
      onCaseClick={click}
    />
  )
  const result = screen.getAllByText('1')
  expect(result).toBeDefined()
})

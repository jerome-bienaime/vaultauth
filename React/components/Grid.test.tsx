/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import Grid from './Grid'
import React from 'react'

it('renders a Grid of Columns', () => {
  const renderer = render(
    <Grid
      shuffleArray={[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]}
    />
  )
  const result = screen.getAllByText("1")
  expect(result).toBeDefined()
})

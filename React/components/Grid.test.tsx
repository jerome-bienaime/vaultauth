/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import Grid from './Grid'
import React from 'react'
import { Case } from '../../lib'

interface ClickableCase {
  case: Case
  onClick: (value: Case) => void
}

type ClickableRow = [
  ClickableCase,
  ClickableCase,
  ClickableCase,
]

it('renders a Grid of Rows', () => {
  function click(value: Case) {
    console.log(value)
  }

  const shuffleArray:ClickableRow[] = [
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
    <Grid shuffleArray={shuffleArray} />
  )
  const result = screen.getAllByText('1')
  expect(result).toBeDefined()
})

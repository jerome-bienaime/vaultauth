/**
 * @jest-environment jsdom
 */
import { Case } from '../../lib'
import RowComponent from './Row'
import {
  screen,
  render,
} from '@testing-library/react'
import React from 'react'

it('renders a Row of Cases', () => {
  function click(value: Case) {
    console.log(value)
  }

  render(
    <RowComponent
      Row={['a', 1, 2]}
      onCaseClick={click}
    />
  )

  const result = screen.getAllByText('a')

  expect(result).toBeDefined()
})

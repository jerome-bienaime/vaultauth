/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import RowComponent from './Row'
import React from 'react'
import { Case } from '../../lib'

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

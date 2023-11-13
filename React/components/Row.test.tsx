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
      Row={[
        { case: "a", onClick: click },
        { case: 1, onClick: click },
        { case: 2, onClick: click },
      ]}
    />
  )

  const result = screen.getAllByText('a')

  expect(result).toBeDefined()
})

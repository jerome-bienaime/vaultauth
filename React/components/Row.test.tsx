/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import RowComponent from './Row'
import React from 'react'

it("renders a Row of Cases", () => {
  render(
    <RowComponent Row={["a","b","c"]} />
  )

  const result = screen.getAllByText("a")
  
  expect(result).toBeDefined()
})
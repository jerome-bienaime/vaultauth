/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import ColumnComponent from './Column'
import React from 'react'

it("renders a Column of Cases", () => {
  render(
    <ColumnComponent columns={["a","b","c"]} />
  )

  const result = screen.getAllByText("a")
  
  expect(result).toBeDefined()
})
/**
 * @jest-environment jsdom
 */
import {
  screen,
  render,
} from '@testing-library/react'
import CaseComponent from './Case'
import React from 'react'

it('renders a Case', () => {
  render(
    <CaseComponent
      case={3}
      onClick={(value) => console.log(value)}
    />
  )

  const result = screen.getByText('3')

  expect(result).toBeDefined()
})

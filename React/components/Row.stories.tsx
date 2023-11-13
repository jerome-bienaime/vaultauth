/** @jsxImportSource theme-ui */

import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import RowComponent from './Row'
import theme from './theme'
import { ThemeUIProvider } from 'theme-ui'
import {
  createTabster,
  getGroupper,
  getMover,
  getTabsterAttribute,
} from 'tabster'
import { Case } from '../../lib'

var tabster = createTabster(window)
getMover(tabster)
getGroupper(tabster)

const meta: Meta<typeof RowComponent> = {
  title: 'component/Row',
  component: RowComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story: any) => (
      <ThemeUIProvider theme={theme}>
        <div
          {...getTabsterAttribute({ root: {} })}
        >
          <Story />
        </div>
      </ThemeUIProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof RowComponent>

function click(value: Case) {
  console.log(value)
}

export const Primary: Story = {
  args: {
    Row: [
      { case: 0, onClick: click },
      { case: 1, onClick: click },
      { case: 2, onClick: click },
    ],
  },
}

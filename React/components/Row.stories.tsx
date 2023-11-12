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

export const Primary: Story = {
  args: {
    Row: [0, 1, 2],
  },
}

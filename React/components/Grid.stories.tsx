/** @jsxImportSource theme-ui */

import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import GridComponent from './Grid'
import theme from './theme'
import { ThemeUIProvider } from 'theme-ui'
import {
  createTabster,
  getGroupper,
  getMover,
  getTabsterAttribute,
} from 'tabster'
import { generateMock } from '@anatine/zod-mock'
import { ShuffleArraySchema } from '../../lib'

var tabster = createTabster(window)
getMover(tabster)
getGroupper(tabster)

const meta: Meta<typeof GridComponent> = {
  title: 'Grid',
  component: GridComponent,
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

type Story = StoryObj<typeof GridComponent>

export const Primary: Story = {
  args: {
    shuffleArray: generateMock(
      ShuffleArraySchema
    ),
  },
}

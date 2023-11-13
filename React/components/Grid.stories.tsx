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
import { Case, ShuffleArraySchema } from '../../lib'

var tabster = createTabster(window)
getMover(tabster)
getGroupper(tabster)

const meta: Meta<typeof GridComponent> = {
  title: 'layout/Grid',
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

function click(value: Case) {
  console.log(value)
}

type Story = StoryObj<typeof GridComponent>

export const Primary: Story = {
  args: {
    shuffleArray: [
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
    ],
  },
}

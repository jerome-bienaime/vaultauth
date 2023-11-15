/** @jsxImportSource theme-ui */
import {
  Case,
  ShuffleArraySchema,
} from '../../lib'
import GridComponent from './Grid'
import theme from './theme'
import { generateMock } from '@anatine/zod-mock'
import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import {
  createTabster,
  getGroupper,
  getMover,
  getTabsterAttribute,
} from 'tabster'
import { ThemeUIProvider } from 'theme-ui'

var tabster = createTabster(window)
getMover(tabster)
getGroupper(tabster)

const meta: Meta<typeof GridComponent> = {
  title: 'container/Grid',
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
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    onCaseClick: click,
  },
}

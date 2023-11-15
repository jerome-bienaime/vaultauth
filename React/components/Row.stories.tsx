/** @jsxImportSource theme-ui */
import { Case } from '../../lib'
import RowComponent from './Row'
import theme from './theme'
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

const meta: Meta<typeof RowComponent> = {
  title: 'block/Row',
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
    Row: [0, 1, 2],
    onCaseClick: click,
  },
}

/** @jsxImportSource theme-ui */

import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import CaseComponent from './Case'
import theme from './theme'
import { ThemeUIProvider } from 'theme-ui'

const meta: Meta<typeof CaseComponent> = {
  title: 'atoms/Case',
  component: CaseComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story: any) => (
      <ThemeUIProvider theme={theme}>
        <Story />
      </ThemeUIProvider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof CaseComponent>

export const Primary: Story = {
  args: {
    case: 0,
  },
}

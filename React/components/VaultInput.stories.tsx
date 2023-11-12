/** @jsxImportSource theme-ui */

import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import VaultInputComponent from './VaultInput'
import theme from './theme'
import { ThemeUIProvider } from 'theme-ui'

const meta: Meta<typeof VaultInputComponent> = {
  title: 'component/VaultInput',
  component: VaultInputComponent,
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

type Story = StoryObj<typeof VaultInputComponent>

export const Primary: Story = {
  args: {
    guess: [0, 1, 2, 3],
  },
}

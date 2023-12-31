/** @jsxImportSource theme-ui */
import VaultInputComponent from './VaultInput'
import theme from './theme'
import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import { ThemeUIProvider } from 'theme-ui'

const meta: Meta<typeof VaultInputComponent> = {
  title: 'block/VaultInput',
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
    guess: [1, 2, 3, 4],
  },
}

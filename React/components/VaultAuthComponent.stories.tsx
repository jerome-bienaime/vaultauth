/** @jsxImportSource theme-ui */

import type {
  Meta,
  StoryObj,
} from '@storybook/react'

import VaultAuthComponent from './VaultAuthComponent'
import theme from './theme'
import { ThemeUIProvider } from 'theme-ui'

const meta: Meta<typeof VaultAuthComponent> = {
  title: 'component/VaultAuthComponent',
  component: VaultAuthComponent,
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

type Story = StoryObj<typeof VaultAuthComponent>

export const Primary: Story = {
  args: {
    shuffleArray: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    vaultPass: [0, 1, 2, 3],
  },
}

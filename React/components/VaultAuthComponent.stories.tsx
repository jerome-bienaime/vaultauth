/** @jsxImportSource theme-ui */
import VaultAuthComponent from './VaultAuthComponent'
import theme from './theme'
import type {
  Meta,
  StoryObj,
} from '@storybook/react'
import {
  createTabster,
  getMover,
  getGroupper,
  getTabsterAttribute,
} from 'tabster'
import { ThemeUIProvider } from 'theme-ui'

var tabster = createTabster(window)
getMover(tabster)
getGroupper(tabster)

const meta: Meta<typeof VaultAuthComponent> = {
  title: 'component/VaultAuthComponent',
  component: VaultAuthComponent,
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

type Story = StoryObj<typeof VaultAuthComponent>

export const Primary: Story = {
  args: {
    shuffleArray: [
      [1, 2, 9],
      [3, 4, 5],
      [6, 7, 8],
    ],
    onSubmit: (password) =>
      password.length > 3
        ? alert(`${password}`)
        : alert('nope'),
    vaultPass: [1, 1, 2, 3],
  },
}

export const ButtonCustom: Story = {
  args: {
    shuffleArray: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    vaultPass: [0, 1, 2, 3],
    config: {
      submitButton: true,
    },
    DeleteButton: <button>DELETE</button>,
    SubmitButton: (
      <button>my-submit-button</button>
    ),
  },
}

export const KeypadAccess: Story = {
  args: {
    shuffleArray: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    vaultPass: [0, 1, 2, 3],
    onSubmit: (password) =>
      console.log(password.length),
    config: {
      keypadAccess: true,
    },
  },
}

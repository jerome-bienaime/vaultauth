/** @jsxImportSource theme-ui */

import type { Meta, StoryObj } from '@storybook/react';

import ColumnComponent from './Column';
import theme from './theme'
import { ThemeUIProvider } from 'theme-ui';


const meta:Meta<typeof ColumnComponent> = {
  title: 'Column',
  component: ColumnComponent,
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

export default meta;

type Story = StoryObj<typeof ColumnComponent>;

export const Primary: Story = {
  args: {
    columns: [0,1,2]
  }
}

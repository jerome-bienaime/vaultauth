import type { Meta, StoryObj } from '@storybook/react';

import CaseComponent from './Case';

const meta = {
  title: 'Case',
  component: CaseComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CaseComponent>;

export default meta;
type Story = StoryObj<typeof CaseComponent>;

export const Primary: Story = {
  args: {
    case: 0
  }
}


import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/Input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  /*argTypes: {
    backgroundColor: { control: 'color'}
  },*/
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
  },
};
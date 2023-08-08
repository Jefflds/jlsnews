import type { Meta, StoryObj } from '@storybook/react';

import Button,{ButtonProps} from '../components/Button/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  /*argTypes: {
    backgroundColor: { control: 'color'}
  },*/
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    Variant: 'Primary',
    disabled: false,
    Label: "Button",
  },
};

export const Danger: Story = {
  args: {
    Variant: 'Danger',
    disabled: false,
    Label: "Button"
  },
};

export const Text: Story = {
  args: {
    Variant: 'text',
    disabled: false,
    Label: "Button"
  },
};

export const Disabled: Story = {
  args: {
    Variant: 'text',
    disabled: true,
    Label: "Button"
  },
};
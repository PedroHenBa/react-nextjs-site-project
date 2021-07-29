import { Heading, HeadingProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto esta escuro',
    as: 'h1',
    size: 'huge',
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
} as Meta;

export const Dark: Story<HeadingProps> = (args) => <Heading {...args}>O texto esta claro</Heading>;
export const Light: Story<HeadingProps> = (args) => <Heading {...args}>O texto esta escuro</Heading>;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto esta claro',
  colorDark: false,
};

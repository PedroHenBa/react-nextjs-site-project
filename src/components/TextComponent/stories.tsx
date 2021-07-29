import { TextComponent, TextComponentProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasel
    lus sapien purus, tempor vel sodales eu, tincidunt in libero. Fusce fringill
    a leo ornare ipsum venenatis, eu convallis odio suscipit. Maecenas quis nulla nec libero
    lobortis ultrices sed in nibh. Vivamus ac erat commodo, eleifend est in, hendrerit justo.
    Nunc ac rutrum urna.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => (
  <div>
    <TextComponent {...args} />
  </div>
);

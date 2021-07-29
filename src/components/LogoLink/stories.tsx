import { LogoLink, LogoLinkProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'logoLink',
    srcImage: 'assets/images/logo.svg',
    link: '#target1',
  },
  argTypes: {
    text: { type: 'string' },
    link: { type: 'string' },
  },
} as Meta;

const Template: Story<LogoLinkProps> = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);
export const Image: Story<LogoLinkProps> = Template.bind({});

export const Text: Story<LogoLinkProps> = Template.bind({});

Text.args = {
  srcImage: '',
};

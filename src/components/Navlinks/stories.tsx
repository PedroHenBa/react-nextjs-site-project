import { NavLinks, NavlinksProps } from './index';
import links from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: 'array' },
  },
} as Meta;

export const Template: Story<NavlinksProps> = (args) => (
  <div>
    <NavLinks {...args} />
  </div>
);

import { MenuLink, MenuLinkProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'Text',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
  },
} as Meta;

export const Template: Story<MenuLinkProps> = (args) => (
  <div style={{ display: 'flex' }}>
    <MenuLink {...args} />
  </div>
);

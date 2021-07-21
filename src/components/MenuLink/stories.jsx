import { MenuLink } from './index';

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
};

export const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <MenuLink {...args} />
  </div>
);

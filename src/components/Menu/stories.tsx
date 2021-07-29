import { Menu } from './index';
import linksMock from '../Navlinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target1',
      srcImage: '',
    },
  },
  argTypes: {
    children: { type: 'array' },
  },
};

export const Template = (args) => (
  <div>
    <Menu {...args} />
  </div>
);

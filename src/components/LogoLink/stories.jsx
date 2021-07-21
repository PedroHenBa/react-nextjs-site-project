import { LogoLink } from './index';

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
};

const Template = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
);

export const Image = Template.bind({});

export const Text = Template.bind({});

Text.args = {
  srcImage: '',
};

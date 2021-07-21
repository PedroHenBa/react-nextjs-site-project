import { Heading } from './index';

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
};

export const Dark = (args) => <Heading {...args} />;

export const Light = Dark.bind({});

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  colorDark: true,
};

Dark.args = {
  children: 'O texto esta claro',
  colorDark: false,
};

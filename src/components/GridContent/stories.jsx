import { GridContent } from './index';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <GridContent {...args} />
  </div>
);

import { GridTwoColumn } from './index';
import mock from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImage: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <GridTwoColumn {...args} />
  </div>
);

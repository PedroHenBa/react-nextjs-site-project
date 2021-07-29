import { GridTwoColumn, GridTwoColumnProps } from './index';
import mock from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mock,
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcImage: { type: 'string' },
  },
} as Meta;

export const Template: Story<GridTwoColumnProps> = (args) => (
  <div>
    <GridTwoColumn {...args} />
  </div>
);

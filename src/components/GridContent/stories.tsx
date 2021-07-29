import { GridContent, GridContentProps } from './index';
import mock from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<GridContentProps> = (args) => (
  <div>
    <GridContent {...args} />
  </div>
);

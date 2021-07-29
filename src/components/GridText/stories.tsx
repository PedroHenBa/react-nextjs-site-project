import { GridText, GridTextProps } from './index';
import mock from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
} as Meta;

export const Template: Story<GridTextProps> = (args) => (
  <div>
    <GridText {...args} />
  </div>
);

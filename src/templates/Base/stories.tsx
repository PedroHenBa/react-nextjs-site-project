import { Base, BaseProps } from './index';
import mock from './mock';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Templates/Base',
  component: Base,
  args: { ...mock },
} as Meta;

export const Template: Story<BaseProps> = (args) => (
  <div>
    <Base {...args} />
  </div>
);

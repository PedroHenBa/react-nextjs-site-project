import { Base } from './index';
import mock from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: { ...mock },
};

export const Template = (args) => (
  <div>
    <Base {...args} />
  </div>
);

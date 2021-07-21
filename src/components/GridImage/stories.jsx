import { GridImage } from './index';
import mock from './mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
};

export const Template = (args) => (
  <div>
    <GridImage {...args} />
  </div>
);

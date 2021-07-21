import { Loading } from './index';

export default {
  title: 'Loading',
  component: Loading,
  args: {},
};

export const Template = (args) => (
  <div>
    <Loading {...args} />
  </div>
);

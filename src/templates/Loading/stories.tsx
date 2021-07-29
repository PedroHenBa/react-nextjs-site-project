import { Loading } from './index';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Loading',
  component: Loading,
  args: {},
} as Meta;

export const Template = () => (
  <div>
    <Loading />
  </div>
);

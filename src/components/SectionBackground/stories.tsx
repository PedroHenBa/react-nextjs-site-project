import { SectionBackground, SectionBackgroundProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Testando background</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum magna at efficitur facilisis.
          Vestibulum placerat nulla non augue ultrices, sit amet viverra enim luctus. Duis vulputate est sit amet lorem
          tincidunt auctor. Donec porttitor sapien a arcu eleifend, id efficitur eros pellentesque. Sed sit amet aliquet
          diam, a finibus libero. Phasellus consectetur magna nisl, non bibendum odio dictum viverra. Fusce sit amet
          massa mollis, maximus orci ornare, sagittis massa.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
} as Meta;

export const Template: Story<SectionBackgroundProps> = (args) => (
  <div>
    <SectionBackground {...args} />
  </div>
);

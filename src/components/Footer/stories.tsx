import { Footer, FooterProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: '<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>',
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => (
  <div>
    <Footer {...args} />
  </div>
);

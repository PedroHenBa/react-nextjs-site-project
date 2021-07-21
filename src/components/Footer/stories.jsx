import { Footer } from './index';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: '<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>',
  },
};

export const Template = (args) => (
  <div>
    <Footer {...args} />
  </div>
);
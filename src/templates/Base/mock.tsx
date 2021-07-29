import mock from '../../components/Navlinks/mock';
import { GridText } from '../../components/GridText';
import mockText from '../../components/GridText/mock';
import { BaseProps } from './index';

export default {
  links: mock,
  footerHtml: `<p>Teste de footer</p>`,
  logoData: {
    text: 'logo',
    link: '#',
  },
  children: (
    <>
      <GridText {...mockText} background />
      <GridText {...mockText} />
      <GridText {...mockText} background />
      <GridText {...mockText} />
      <GridText {...mockText} background />
    </>
  ),
} as BaseProps;

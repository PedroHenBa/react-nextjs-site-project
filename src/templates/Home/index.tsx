import { Base } from '../Base';
import { GridTwoColumn, GridTwoColumnProps } from '../../components/GridTwoColumn';

import { GridText, GridTextProps } from '../../components/GridText';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridImage, GridImageProps } from '../../components/GridImage';
import Head from 'next/head';
import config from '../../config';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  footerHtml: string;
  slug: string;
  title: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps = GridTextProps | GridImageProps | GridContentProps | GridTwoColumnProps;

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  const { menu, footerHtml, sections, slug, title } = data[0];
  const { text, links, link, srcImage } = menu;

  return (
    <Base links={links} footerHtml={footerHtml} logoData={{ text, link, srcImage }}>
      <Head>
        <title>
          {title} | {config.siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}=${index}`;

        if (component === 'section.section-two-colums') {
          return <GridTwoColumn key={key} {...(section as GridTwoColumnProps)} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...(section as GridTextProps)} />;
        }
      })}
    </Base>
  );
}

export default Home;

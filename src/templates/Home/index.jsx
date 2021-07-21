import P from 'prop-types';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { GridTwoColumn } from '../../components/GridTwoColumn';

import { GridText } from '../../components/GridText';
import { GridContent } from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import Head from 'next/head';
import config from '../../config/index';

function Home({ data }) {
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
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;

Home.propTypes = {
  data: P.array,
};

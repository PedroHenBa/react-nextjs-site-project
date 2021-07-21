import { loadPages } from '../api/load-pages';
import Home from '../templates/Home';
import P from 'prop-types';

export default function Page({ data }) {
  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export async function getStaticPaths() {
  const paths = (await loadPages()).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  let data = null;
  try {
    data = await loadPages(context.params.slug);
  } catch (e) {
    console.log(e);
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

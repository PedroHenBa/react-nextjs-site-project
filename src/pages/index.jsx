import P from 'prop-types';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';
import { PageNotFound } from '../templates/PageNotFound';

export default function Index({ data = null }) {
  return <Home data={data} />;
}

export const getStaticProps = async () => {
  let data = null;
  try {
    data = await loadPages('landing-page');
  } catch (e) {
    console.log(e);
  }
  if (!data || !data.length) {
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

Index.propTypes = {
  data: P.array,
};

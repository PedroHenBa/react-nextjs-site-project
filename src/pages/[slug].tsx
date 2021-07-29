import { loadPages } from '../api/load-pages';
import Home, { HomeProps } from '../templates/Home';
import { useRouter } from 'next/router';
import { Loading } from '../templates/Loading';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Page({ data }: HomeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
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
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  let data = null;
  try {
    data = await loadPages(context.params.slug as string);
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

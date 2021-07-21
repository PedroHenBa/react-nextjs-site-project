import * as Styled from './styles';
import P from 'prop-types';
import { Heading } from '../Heading';
import Link from 'next/link';

export const LogoLink = ({ text, srcImage = '', link }) => {
  const nextLink = !!link.match(/^\//);

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container>{srcImage ? <img src={srcImage} alt={text} /> : text}</Styled.Container>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>{srcImage ? <img src={srcImage} alt={text} /> : text}</Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImage: P.string,
  link: P.string.isRequired,
};

import * as Styled from './styles';
import { Heading } from '../Heading';
import Link from 'next/link';

export const LogoLink = ({ text, srcImage = '', link, newTab = false }: LogoLinkProps) => {
  const nextLink = !!link.match(/^\//);
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <Styled.Container target={target}>{srcImage ? <img src={srcImage} alt={text} /> : text}</Styled.Container>
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

export type LogoLinkProps = {
  text: string;
  srcImage?: string;
  link: string;
  newTab?: boolean;
};

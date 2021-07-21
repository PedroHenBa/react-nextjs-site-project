import * as Styled from './styles';
import P from 'prop-types';
import Link from 'next/link';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = !!link.match(/^\//);

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target}>{children}</Styled.Container>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  newTab: P.bool,
  link: P.string.isRequired,
};

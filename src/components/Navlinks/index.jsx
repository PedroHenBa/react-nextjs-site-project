import * as Styled from './styles';
import P from 'prop-types';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => {
        return <MenuLink key={link.link} {...link} />;
      })}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      newTab: P.bool,
      link: P.string.isRequired,
    }),
  ),
};

import * as Styled from './styles';
import { MenuLink, MenuLinkProps } from '../MenuLink';

export const NavLinks = ({ links = [] }: NavlinksProps) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => {
        return <MenuLink key={link.link} {...link} />;
      })}
    </Styled.Container>
  );
};

export type NavlinksProps = {
  links?: MenuLinkProps[];
};

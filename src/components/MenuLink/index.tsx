import * as Styled from './styles';
import Link from 'next/link';
import { ReactNode } from 'react';

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
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

export type MenuLinkProps = {
  children: ReactNode;
  newTab?: boolean;
  link: string;
};

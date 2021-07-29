import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { ReactNode } from 'react';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export const Base = ({ links, footerHtml, logoData, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

export type BaseProps = {
  children: ReactNode;
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
  footerHtml: string;
};

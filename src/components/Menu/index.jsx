import * as Styled from './styles';
import P from 'prop-types';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../Navlinks';
import { Menu as MenuIcons } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcons } from '@styled-icons/material-outlined/Close';
import { useState, useEffect } from 'react';
import { theme } from '../../styles/theme';

const useMediaQuery = (queryValue, setVisible) => {
  useEffect(() => {
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!matchMedia.matches) {
        setVisible(false);
      }
    };

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue, setVisible]);
};

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);
  useMediaQuery(theme.media.lteMedium, setVisible);

  return (
    <>
      <Styled.Button onClick={() => setVisible(true)} visible={visible} aria-label="Open/Close menu">
        {visible ? <CloseIcons aria-label="Close menu" /> : <MenuIcons aria-label="Open menu" />}
      </Styled.Button>

      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.ContainerMenu>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.ContainerMenu>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

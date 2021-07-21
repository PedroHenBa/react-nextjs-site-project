import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    background: ${theme.colors.whiteColor};
    border-bottom: ${theme.colors.mediumGray};
    transition: opacity 500ms ease-in-out;

    > ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${Heading} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      visibility: hidden;
      opacity: 0;
      height: 100vh;
      ${visible && menuVisible()};

      > ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      & ${Heading} {
        padding-bottom: ${theme.spacing.big};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const ContainerMenu = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacing.xxbig} 0;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;

    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.whiteColor};
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    > svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

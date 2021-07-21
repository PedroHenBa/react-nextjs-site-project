import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${theme.spacing.big};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Heading} {
      margin-bottom: ${theme.spacing.xbig};
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacing.big};
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;

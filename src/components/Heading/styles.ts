import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from './index';

const titleSizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.big};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xbig};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xbig};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<Pick<HeadingProps, 'colorDark' | 'size' | 'uppercase'>>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.whiteColor};
    ${titleSizes[size](theme)};
    ${titleCase(uppercase)};
  `}
`;

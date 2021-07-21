import styled, { css } from 'styled-components';

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.fonts.sizes.big};
  `,
  big: (theme) => css`
    font-size: ${theme.fonts.sizes.xbig};
  `,
  huge: (theme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xbig};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.whiteColor};
    ${titleSizes[size](theme)};
    ${titleCase(uppercase)};
  `}
`;

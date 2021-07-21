import styled, { css } from 'styled-components';

const backgroundActivate = (theme, background) => {
  if (background) {
    return css`
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.whiteColor};
    `;
  } else {
    return css`
      background: ${theme.colors.whiteColor};
      color: ${theme.colors.primaryColor};
    `;
  }
};

export const Container = styled.div`
  ${({ theme, background }) => css`
    ${backgroundActivate(theme, background)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;

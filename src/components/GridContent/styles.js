import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin: 0 auto;
    max-width: 58rem;
  `}
`;

export const html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.big} 0;
  `}
`;

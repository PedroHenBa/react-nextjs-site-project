import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    color: inherit;
    text-decoration: none;
    align-items: center;

    > img {
      height: 2.5rem;
    }
  `}
`;

import * as Styled from './styles';
import { ReactNode } from 'react';

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export type SectionContainerProps = {
  children: ReactNode;
};

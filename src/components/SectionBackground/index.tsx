import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { ReactNode } from 'react';

export const SectionBackground = ({ children, background = false, sectionId = '' }: SectionBackgroundProps) => {
  return (
    <Styled.Container background={background} id={sectionId}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

export type SectionBackgroundProps = {
  children: ReactNode;
  background?: boolean;
  sectionId?: string;
};

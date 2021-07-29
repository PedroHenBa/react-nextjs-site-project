import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, background = false, html, sectionId = '' }: GridContentProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase={true} colorDark={!background} as="h2">
          {title}
        </Heading>

        <Styled.html>
          <TextComponent>{html}</TextComponent>
        </Styled.html>
      </Styled.Container>
    </SectionBackground>
  );
};

export type GridContentProps = {
  html: string;
  background?: boolean;
  title: string;
  sectionId?: string;
  component?: string;
};

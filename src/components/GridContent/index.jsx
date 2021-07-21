import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, background = false, html, sectionId = '' }) => {
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

GridContent.propTypes = {
  html: P.string.isRequired,
  background: P.bool,
  title: P.string.isRequired,
  sectionId: P.string,
};

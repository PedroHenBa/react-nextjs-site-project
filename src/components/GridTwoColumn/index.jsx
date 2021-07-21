import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({ title, text, background = false, srcImage, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase={true} colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>

        <Styled.ImageContainer>
          <Styled.Image src={srcImage} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  srcImage: P.string.isRequired,
  sectionId: P.string,
};

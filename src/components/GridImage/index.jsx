import * as Styled from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { GridText } from '../GridText';

export const GridImage = ({ title, description, grid, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase={true} colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>

        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImage}${el.altText}`}>
              <Styled.GridImage src={el.srcImage} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(P.shape({ srcImage: P.string.isRequired, altText: P.string.isRequired })).isRequired,
  sectionId: P.string,
};

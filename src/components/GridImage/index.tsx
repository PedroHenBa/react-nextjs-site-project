import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ title, description, grid, background = false, sectionId = '' }: GridImageProps) => {
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

export type GridImageElementProps = {
  srcImage: string;
  altText: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  background?: boolean;
  grid: GridImageElementProps[];
  sectionId?: string;
  component?: string;
};

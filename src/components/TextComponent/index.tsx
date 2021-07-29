import * as Styled from './styles';

export const TextComponent = ({ children }: TextComponentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

export type TextComponentProps = {
  children: string;
};

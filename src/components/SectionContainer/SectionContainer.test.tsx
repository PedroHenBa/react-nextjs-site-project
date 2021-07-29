import { SectionContainer } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(<SectionContainer>children</SectionContainer>);
    expect(screen.getByText('children')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

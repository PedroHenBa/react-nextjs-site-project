import { SectionBackground } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading', { name: 'children' })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with background white', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>children</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading', { name: 'children' })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});

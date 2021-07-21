import { LogoLink } from './index';
import { renderTheme } from '../../styles/render-theme';
import { getByAltText, getByRole, screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Opa" />);
    expect(screen.getByRole('heading', 'Opa')).toBeInTheDocument();
    expect(screen.getByRole('link', 'Opa')).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Opa" srcImage="image.png" />);
    expect(screen.getByAltText('Opa')).toHaveAttribute('src', 'image.png');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Opa" srcImage="image.png" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

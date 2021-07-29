import { Footer } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<Footer />', () => {
  it('should render Footer component', () => {
    renderTheme(<Footer footerHtml="<h1>Ola</h1>" />);
    expect(screen.getByRole('heading', { name: 'Ola' })).toBeInTheDocument();
  });
});
